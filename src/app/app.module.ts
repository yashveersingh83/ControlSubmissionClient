import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { routing,    appRoutingProviders } from './app.routing';
import { AppComponent }  from './app.component';
import {PageNotFoundComponent} from './pagenotfound.component';
import { MileStoneModule }         from './milestone/milestone.module';
import { RecepientModule }         from './recepient/routing.module';
import { InformationRequestModule} from './informationrequest/informationrequest.module';
import {CustomCommonModule} from './common/common.module';
import { MaterialModule } from '@angular/material';
import {AppRecepientService} from './app.static.service';
import {LoginService} from './login.service';
import { LoginModule } from './login/login.module';
import { DatepickerModule } from 'angular2-material-datepicker';
@NgModule({
    imports: [
        BrowserModule,
        routing,LoginModule,
        MileStoneModule, RecepientModule,InformationRequestModule,
        HttpModule,
        JsonpModule, ReactiveFormsModule, FormsModule
        ,CustomCommonModule,
         MaterialModule.forRoot(),
         DatepickerModule
    ],
    declarations: [AppComponent,
        PageNotFoundComponent,
    ],
    providers: [
        appRoutingProviders , AppRecepientService , LoginService
    ],
   exports:[],
    bootstrap: [AppComponent]
})
export class AppModule { }
