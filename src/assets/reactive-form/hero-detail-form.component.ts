import {Component, Input, OnChanges} from "@angular/core";
import {FormControl, FormArray, FormGroup, FormBuilder, Validators} from "@angular/forms";

import {Address, Herodata, states} from './data-model';
import { HerodataService} from "./herodata.service";

@Component({
  selector: 'app-hero-detail-form',
  templateUrl: './hero-detail-form.component.html',
  styleUrls: ['./hero-detail-form.component.css']
})

export class HeroDetailFormComponent implements OnChanges {
  @Input() herodata: Herodata;

  heroForm: FormGroup;  // heroForm is of type FormGroup
  nameChangeLog: string[] = [];
  states = states;

  constructor(
    private fb: FormBuilder,
    private herodataService: HerodataService) { // <-- inject FormBuilder

    this.createForm();
    this.logNameChange();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      secretLairs: this.fb.array([]),
      // address: this.fb.group(new Address()),  // <--a FormGroup with a new address
      power: '',
      sidekick: ''
    });
  }

  checkForm = new FormGroup({
    food: new FormControl(['', Validators.required]),
  });

  ngOnChanges() {
    this.heroForm.reset({
      name: this.herodata.name
    });
    this.setAddresses(this.herodata.addresses);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  };


  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address));
  }

  onSubmit() {
    this.herodata = this.prepareSaveHero();
    this.herodataService.updateHerodata(this.herodata).subscribe(/*error handling*/);
    this.ngOnChanges();
  }

  prepareSaveHero(): Herodata {
    const formModel = this.heroForm.value;

    //deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    // return new `Herodata` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: Herodata = {
      id: this.herodata.id,
      name: formModel.name as string,
      // address: formModel.secretLairs // <-- Bad!
      addresses: secretLairsDeepCopy
    };
    return saveHero;
  }

  revert() { this.ngOnChanges();}

  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }
}


// export class HeroDetailFormComponent5 {
//   heroForm: FormGroup;  // heroForm is of type FormGroup
//   states = states;
//
//
//   constructor(private fb: FormBuilder) { // <-- inject FormBuilder
//     this.createForm();
//   }
//
//   createForm() {
//     this.heroForm = this.fb.group({
//       name: ['', Validators.required],
//       address: this.fb.group({
//         street: '',
//         city: '',
//         state: '',
//         zip: '',
//     }),
//       power: '',
//       sidekick: ''
//     });
//   }
//
//   checkForm = new FormGroup({
//     food: new FormControl(['', Validators.required]),
//   });
// }


// export class HeroDetailFormComponent4 {
//   heroForm: FormGroup;  // heroForm is of type FormGroup
//   states = states;
//
//
//   constructor(private fb: FormBuilder) { // <-- inject FormBuilder
//     this.createForm();
//   }
//
//   createForm() {
//     this.heroForm = this.fb.group({
//       name: ['', Validators.required],
//       street: '',
//       city: '',
//       state: '',
//       zip: '',
//       power: '',
//       sidekick: ''
//     });
//   }
//
//   checkForm = new FormGroup({
//     food: new FormControl(['', Validators.required]),
//   });
// }



// export class HeroDetailFormComponent1 {
//   //FormControl构造函数接收三个可选参数： 初始值、验证器数组和异步验证器数组。
//   name = new FormControl();
// }
//
// export class HeroDetailFormComponent2 {
//   // FormGroup实例heroForm
//   heroForm = new FormGroup({
//     name:  new FormControl(),
//   });
// }

// export class HeroDetailFormComponent3 {
//   heroForm: FormGroup;  // heroForm is of type FormGroup
//
//   constructor(private fb: FormBuilder) { // <-- inject FormBuilder
//     this.createForm();
//   }
//
//   createForm() {
//     // FormBuilder.group是一个用来创建FormGroup的工厂方法，它接受一个对象，
//     // 对象的键和值分别是FormControl的名字和它的定义。
//     this.heroForm = this.fb.group({
//       // 数组第一个条目是name的初始值，第二个是required验证器
//       name: ['', Validators.required],   // the FormControl called "name"
//     })
//   }
//
// }


