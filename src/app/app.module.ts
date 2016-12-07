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
// import {PaginationDirective} from "./directive/paging.directive";
@NgModule({
    imports: [
        BrowserModule,
        routing,
        MileStoneModule, RecepientModule,InformationRequestModule,
        HttpModule,
        JsonpModule, ReactiveFormsModule, FormsModule
        ,CustomCommonModule
       // AlertModule,DatepickerModule,Ng2BootstrapModule

    ],
    declarations: [AppComponent,
        PageNotFoundComponent
    ],
    providers: [
        appRoutingProviders
    ],
   exports:[],
    bootstrap: [AppComponent]
})
export class AppModule { }
