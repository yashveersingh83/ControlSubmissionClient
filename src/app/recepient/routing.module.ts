import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import {RecepientComponent} from './recepient.component'
import {CollapseOnClick} from "../directive/collapse-on-click.directive";
import { recepientRouting } from './recepient.routing';
import { RecepientDetailComponent} from './recepient.detail.component'
import {RecepientAddComponent} from './recepient.add.component'
import { RecepientService} from './recepient.service'
@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        recepientRouting
    ],
    declarations: [
        RecepientComponent//,CollapseOnClick
        , RecepientDetailComponent
        ,RecepientAddComponent
    ],
    providers: [
        RecepientService
    ]

})
export class RecepientModule { }