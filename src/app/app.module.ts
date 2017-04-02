import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { routing,    appRoutingProviders } from './app.routing';
import { AppComponent }  from './app.component';
import {PageNotFoundComponent} from './pagenotfound.component';
import { MileStoneModule }         from './milestone/milestone.module';
import { RecepientModule }         from './recepient/recepient.module';
import { InformationRequestModule} from './informationrequest/informationrequest.module';
import {CustomCommonModule} from './common/common.module';
import { DevExtremeModule } from 'devextreme-angular';
import {AppRecepientService} from './app.static.service';

import { LoginModule } from './login/login.module';
@NgModule({
    imports: [
        BrowserModule,
        routing,LoginModule,
        MileStoneModule, RecepientModule,InformationRequestModule,
        HttpModule,
        JsonpModule, ReactiveFormsModule, FormsModule
        ,CustomCommonModule,
      DevExtremeModule
        // DatepickerModule
    ],
    declarations: [AppComponent,
        PageNotFoundComponent,
    ],
    providers: [
        appRoutingProviders , AppRecepientService
    ],
   exports:[],
    bootstrap: [AppComponent]
})
export class AppModule { }
