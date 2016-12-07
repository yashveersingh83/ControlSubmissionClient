            import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
            import {NgModel, ControlValueAccessor} from "@angular/forms";
            import {SelectListItem} from '../models//SelectListItem';

            @Component({
                selector: 'ng-dropdown[ngModel]',
                //  directives: [NgIf, NgFor, NgClass],
                template: `
                          <div class="form-group">
  				            <label for="sel1">Select list:</label>
  			               <select (change)="onSelect($event.target.value)"   name="dd"  class="form-control" [id]="refId">
             
                          <option *ngFor="let item of dataList"  [value]="item.id">
                                 {{item.name}}
                              </option>    
  				            </select>
            </div>
            `
            })

            export class DropDownDirective implements OnInit {
                @Input("dataSourceList") dataSourceList: SelectListItem[];
                @Input("Id") Id: string;
                dataList: SelectListItem[];
                selectedOption: number;
                refId: string;

                @Output("onSelectItem") onSelectItem = new EventEmitter();
               

                ngOnInit() {
                    this.refId = this.Id;
                    console.log("lll" + this.dataSourceList.length);
                    this.createSelectList();
                }

                constructor(private selectedOptionModel: NgModel) {
                    //    this.selectedOptionModel.valueAccessor = this;

                }
                onSelect(selectedId) {
                    console.log("selected option:" + selectedId);
                    this.onSelectItem.emit(selectedId);
                }

               
              public  createSelectList() {
                    this.dataList = this.dataSourceList;
                }



            }