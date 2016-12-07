import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { RecepientService } from './recepient.service';
import { RecepientModel } from '../models/recepientModel';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component(
    {
        // moduleId: module.id,
        templateUrl: './recepientadd.html',
        providers:[RecepientService]
    }
)
export class RecepientAddComponent {
    newRecepient: RecepientModel;
    errorMessage: string;
    form: FormGroup;
    constructor(private _service: RecepientService) {
        
    }

    ngOnInit() {

        // the long way
        this.form = new FormGroup({
            Id: new FormControl(),
           
            FirstName: new FormControl(),
            LastName:new FormControl(),
            Division: new FormControl()
            
        });

    }


    private saveRecepient() {
        console.log(this.form);
        this._service.addRecepient(JSON.stringify(this.form.value)).subscribe(
            r => this.newRecepient = r,
            error => this.errorMessage = <any>error);
    }

}