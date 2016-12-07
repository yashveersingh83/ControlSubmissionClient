import {Routes, RouterModule} from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './pagenotfound.component'
const appRoutes: Routes = [

    { path: '**', component: PageNotFoundComponent  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);