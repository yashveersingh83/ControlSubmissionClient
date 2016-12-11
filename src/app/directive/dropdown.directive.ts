import { Component, Input, Output, EventEmitter, OnInit, } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SelectListItem } from '../models//SelectListItem';
import { Observable }     from 'rxjs/Observable';
@Component({
    selector: 'ng-dropdown[ngModel]',
    //  directives: [NgIf, NgFor, NgClass],
    template: `
                          <div class="form-group">
  				            <label for="sel1">Select list:</label>
  			               <select (change)="onSelect($event.target.value)"   [name]="controlName"  class="form-control" [id]="controlId">
             
                          <option *ngFor="let item of dataSourceList"  [value]="item.id">
                                 {{item.name}}
                              </option>    
  				            </select>
            </div>
            `
})

export class DropDownDirective implements OnInit {
    @Input('dataSourceList') dataSourceList: Observable<  SelectListItem[]>;
    @Input('controlId') controlId: string;
    @Input('controlName') controlName: string;
    selectedOption: number;
    

    @Output('onSelectItem') onSelectItem = new EventEmitter();


    ngOnInit() {
       
           }

    constructor(private selectedOptionModel: NgModel) {
        //    this.selectedOptionModel.valueAccessor = this;

    }
    onSelect(selectedId) {
        console.log('selected option:' + selectedId);
        this.onSelectItem.emit(selectedId);
    }



}