import { Component, Input ,forwardRef } from '@angular/core';
import { ControlValueAccessor ,NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'counter-input',
  template: `
    <button (click)="increment()">+</button>
    {{counterValue}}
    <button (click)="decrement()">-</button>
  `,
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
  ]
})
export class CounterInputComponent  implements ControlValueAccessor {

  @Input()
  _counterValue = 0;
 propagateChange = (_: any) => {};

 get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }
  increment() {
    this.counterValue++;
    this.propagateChange(this.counterValue);
  }

  decrement() {
    this.counterValue--;
    this.propagateChange(this.counterValue);
  }

  writeValue(value: any) {
  if (value !== undefined) {
    this.counterValue = value;
  }
}
 registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}