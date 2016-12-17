import { Component, Input ,forwardRef,OnInit,EventEmitter,Output} from '@angular/core';
import { ControlValueAccessor ,NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectListItem } from '../models//SelectListItem';
import { Observable }     from 'rxjs/Observable';
@Component({
  selector: 'custom-select-list',
  template: `
   <div class="form-group"><label for="sel1">Custom Select list:</label>
  <select (change)="onSelect($event.target.value)"   [name]="controlName"  class="form-control" [id]="controlId">
                          <option *ngFor="let item of dataSourceList"  [value]="item.id">
                                 {{item.name}}
                              </option>    
</select>  </div>
  `,
  providers: [
    { provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectListComponent),
      multi: true
    }
  ]
})
export class SelectListComponent  implements ControlValueAccessor,OnInit {
    @Input('dataSourceList') dataSourceList: Observable<SelectListItem[]>;
    @Input('controlId') controlId: string;
    @Input('controlName') controlName: string;
    @Output('onSelectItem') onSelectItem = new EventEmitter();
    selectedId : number;
    propagateChange = (_: any) => {};

    ngOnInit() {}
    constructor() {}

onSelect(selectedId) {
        console.log('selected option:' + selectedId);
        this.writeValue(selectedId);
        this.onSelectItem.emit(selectedId);
    }
 get Items() {
    return this.dataSourceList;
  }

  set Items(val) {
    this.dataSourceList = val;
    this.propagateChange(this.dataSourceList);
  }
  writeValue(value: any) {
console.log('gg ' + value);
  if (value !== undefined) {
    this.selectedId = value;
  }
}
 registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}