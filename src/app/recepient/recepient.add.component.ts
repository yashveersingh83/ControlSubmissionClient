import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecepientService } from './recepient.service';
import { RecepientModel } from '../models/recepientModel';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { slideToRight } from '../router.animations';

@Component(
    {
        templateUrl: './recepientadd.html',
        providers: [RecepientService],
        animations: [slideToRight()],
        host: { '[@slideToRight]': '' }
    }
)
export class RecepientAddComponent implements OnInit {
    newRecepient: RecepientModel;
    errorMessage: string;
    form: FormGroup;
    firstNameCtrl: AbstractControl;
    lastNameCtrl: AbstractControl;
    divisionCtrl: AbstractControl;
    constructor(private _service: RecepientService, private route: ActivatedRoute,
        private router: Router, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            Id: [''],
            FirstName: ['', [Validators.required, Validators.minLength(3)]],
            LastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            Division: ['', [Validators.required]],
        });
        this.firstNameCtrl = this.form.controls['FirstName'];
        this.lastNameCtrl = this.form.controls['LastName'];
        this.divisionCtrl = this.form.controls['Division'];
    }
    private saveRecepient() {
        //  this.validate(params);
        console.log(this.form);
           this._service.addRecepient(JSON.stringify(this.form.value)).subscribe(
              r => this.newRecepient = r,
             error => this.errorMessage = <any>error,
              () => { this.gotoRecepients(); });
    }
    gotoRecepients() { this.router.navigate(['/recepients']); }

}