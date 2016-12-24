import { NgModule }      from '@angular/core';
import {PaginationDirective} from "../directive/paging.directive";
import {NgIf, NgFor, NgClass, CommonModule} from "@angular/common";
import {CollapseOnClick} from '../directive/collapse-on-click.directive';
import { CustomSelectComponent } from '../directive/custom.select.component';
@NgModule({
    imports: [  
      CommonModule
    ],
    declarations: [
         PaginationDirective,CollapseOnClick,CustomSelectComponent
    ],
    providers: [
    ],
    exports: [PaginationDirective, CollapseOnClick,CustomSelectComponent]
})
export class CustomCommonModule { }