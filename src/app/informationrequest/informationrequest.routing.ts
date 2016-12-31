import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {InformationRequestComponent} from './informationrequest.component';
import {AddInformationRequestComponenet} from './informationrequest.add.component';

const appInformationRequestRoutes: Routes = [

    {
        path: 'informationrequests',
        component: InformationRequestComponent,

    }
    ,
    { path: 'informationrequest/add', component: AddInformationRequestComponenet },

];



export const informationRequestRouting: ModuleWithProviders = RouterModule.forRoot(appInformationRequestRoutes);