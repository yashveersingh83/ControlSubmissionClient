﻿import {Component, OnInit, OnDestroy} from '@angular/core';
import {RecepientService } from './recepient.service';
import { RecepientModel} from '../models/recepientModel'

import { Router }       from '@angular/router';
@Component(
    {
        selector: 'recepientList',
      //  moduleId: module.id,
        templateUrl:'./recepient.html',
        providers: [RecepientService],
    }
)
export class RecepientComponent implements OnInit {


    recepients: RecepientModel[];
    errorMessage: string;
    recepientsName: string;

    constructor(private _service: RecepientService, private router: Router) {

    }

    ngOnInit() {
        this.getRecepient();

    }

    private getRecepient() {

        this._service.getRecepients()
            .subscribe(
            r => this.recepients = r,
            error => this.errorMessage = <any>error);


    }


    onSelect(recp: RecepientModel) {
        console.log(recp);
        this.router.navigate(['/recepients', recp.Id]);
    }
    onAdd() {
        this.router.navigate(['/recepient/add']);
    }
    onSearch(repName: string) {
        console.log(repName);
        this._service.searchRecepients(repName).subscribe
            (
            m => this.recepients = m, err => this.errorMessage = <any>err
            );

    }
}