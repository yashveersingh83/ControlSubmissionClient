import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {MileStoneComponent} from './milestone.component'
import {MileStoneService} from './milestone.service';
import { mileStoneRouting } from './milestone.routing';
import {MileStoneDetailComponent} from './milestone.detail.component';
import { MileStoneAddComponent} from './milestone.add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomCommonModule} from '../common/common.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,ReactiveFormsModule,
        mileStoneRouting,
        CustomCommonModule
    ],
    declarations: [
        MileStoneComponent, MileStoneDetailComponent, MileStoneAddComponent
    ],
    providers: [
        MileStoneService
    ],    
})
export class MileStoneModule { }