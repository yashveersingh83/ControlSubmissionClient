import {Routes, RouterModule} from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import {MileStoneComponent} from './milestone.component'
import {MileStoneDetailComponent } from './milestone.detail.component'
import { MileStoneAddComponent } from './milestone.add.component'
const appMileStoneRoutes: Routes = [

    {
        path: 'milestones',
        component: MileStoneComponent,

    },
    { path: 'milestones/add', component: MileStoneAddComponent },
    { path: 'milestones/:id', component: MileStoneDetailComponent }
   
];


export const mileStoneRouting: ModuleWithProviders = RouterModule.forRoot(appMileStoneRoutes);