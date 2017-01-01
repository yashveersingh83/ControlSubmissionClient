import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { SelectListItem } from '../models//SelectListItem';
import { Observable }     from 'rxjs/Observable';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


const SOME_SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomSelectComponent),
  multi: true
};

@Component({
  selector: 'custom-select',
  template: `
  <select class="form-control " (change)="change(select.value)" #select>
  <option value="-1" >select</option>
  <option  *ngFor="let item of optionItems" value="{{ item.id }}" [selected]="_value">
    {{ item.name }}
  </option>
</select>
  `,
  providers: [SOME_SELECT_VALUE_ACCESSOR]
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {

  private _value: any;

  @Input() optionItems: Observable<SelectListItem[]>;

  private onTouchedCallback: () => void;
  private onChangeCallback: (_: any) => void;

  ngOnInit(): void {
  }  
  change(val) {
    this.onChangeCallback(val);
  }

  writeValue(id: any): void {
    this._value = id;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

}


