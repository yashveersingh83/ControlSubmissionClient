import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {LoginComponent} from './login.component';
import { loginRouting } from './login.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomCommonModule} from '../common/common.module';

@NgModule({
    imports: [
        CommonModule,
        loginRouting,
        CustomCommonModule
       , FormsModule, ReactiveFormsModule,
    ],
    declarations: [
       LoginComponent
    ],
    providers: [

    ],
})
export class LoginModule { }