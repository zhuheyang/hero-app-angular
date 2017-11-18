import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";
import {Directive, Input} from "@angular/core";
import {forbiddenNameValidator} from "./forbidden-name-validator.directive";

@Directive({
  selector: '[appForbiddenName]',
  //自定义验证器指令是用useExisting而不是useClass来实例化的。
  // 注册的验证器必须是这个 ForbiddenValidatorDirective 实例本身，
  // 也就是表单中 forbiddenName 属性被绑定到了"bob"的那个。
  // 如果用useClass来代替useExisting，就会注册一个新的类实例，而它是没有forbiddenName的。
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})

export class ForbiddenValidatorDirective implements Validator {
  @Input() forbiddenName: string;
  validate(control: AbstractControl): {[key: string]: any} {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control): null;
  }
}

// 一旦 ForbiddenValidatorDirective 写好了，我们只要把forbiddenName选择器添加到输入框上就可以激活这个验证器了。
// <input id="name" name="name" class="form-control"
//         required minlength="4" forbiddenName="bob"
//         [(ngModel)]="hero.name" #name="ngModel">



