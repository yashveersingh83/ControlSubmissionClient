import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {RecepientComponent} from './recepient.component';
import { RecepientDetailComponent} from './recepient.detail.component';
import {RecepientAddComponent} from './recepient.add.component';
const recepientRoutes: Routes = [
    { path: 'recepients/:id', component: RecepientDetailComponent },
    { path: 'recepient/add', component: RecepientAddComponent },
    {
        path: '',
        redirectTo: '/recepients',
        pathMatch: 'full'
    },
    {
        path: 'recepients',
        component: RecepientComponent,
    }   ,
];


export const recepientRouting: ModuleWithProviders = RouterModule.forRoot(recepientRoutes);