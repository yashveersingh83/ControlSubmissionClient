import { NgModule }      from '@angular/core';
import {PaginationDirective} from "../directive/paging.directive";
import {NgIf, NgFor, NgClass, CommonModule} from "@angular/common";
import {CollapseOnClick} from "../directive/collapse-on-click.directive";
@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
         PaginationDirective,CollapseOnClick


    ],
    providers: [
        
    ],
    exports: [PaginationDirective, CollapseOnClick]

   
})
export class CustomCommonModule { }