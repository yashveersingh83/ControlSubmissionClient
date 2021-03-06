﻿import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {InformationRequestComponent} from './informationrequest.component'
import {InformationRequestService} from './informationrequest.service'
import {  informationRequestRouting} from './informationrequest.routing';
import {InformationRequest} from '../models/informationrequestModel'
import {AddInformationRequestComponenet} from './informationrequest.add.component';
import {DropDownDirective} from '../directive/dropdown.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MileStoneService} from '../mileStone/milestone.service';
import {RecepientService} from '../recepient/recepient.service';
import {CustomCommonModule} from '../common/common.module';
import {CounterInputComponent} from './input-counter-component';
import {SelectListComponent} from '../directive/select-list-component';
import { DevExtremeModule } from 'devextreme-angular';
@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        informationRequestRouting,CustomCommonModule, DevExtremeModule
    ],
    declarations: [
        InformationRequestComponent, AddInformationRequestComponenet
        , DropDownDirective, CounterInputComponent, SelectListComponent
    ],
    providers: [
        InformationRequestService, MileStoneService, RecepientService
    ],

})
export class InformationRequestModule
    {
}