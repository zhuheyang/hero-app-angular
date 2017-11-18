/** A hero's name can't match the given regular expression */
import {AbstractControl, ValidatorFn} from "@angular/forms";

// 这个函数实际上是一个工厂，它接受一个用来检测指定名字是否已被禁用的正则表达式，并返回一个验证器函数。
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
