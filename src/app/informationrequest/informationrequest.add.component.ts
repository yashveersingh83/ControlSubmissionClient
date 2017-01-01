import { SelectListItem } from '../models/selectListItem';
import { Component, OnInit,  } from '@angular/core';
import { InformationRequestService } from './informationrequest.service';
import { MileStoneModel } from '../models/milestoneModel';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { slideToRight } from '../router.animations';
@Component(
    {
        templateUrl: './addinformationrequest.html',
        providers: [InformationRequestService],
        animations: [slideToRight()],
        host: {'[@slideToRight]': ''}
    }
)
export class AddInformationRequestComponenet implements OnInit {

    mileStonedataSourceList: SelectListItem[];
    selectedMileStone: number; selectedRecepient: number;
    errorMessage: string; milestomes: MileStoneModel[];
    form: FormGroup;
    invalidMileStone = false;
    invalidRecepient = false;
    recepientsdataSourceList: SelectListItem[];
    constructor(private inforService: InformationRequestService , private router: Router
    ) {
        this.inforService = inforService;
        this.mileStonedataSourceList = [];
    }

    getMileStoneAndRecepient() {
        Observable.forkJoin(
            this.inforService.getMileStones(),
            this.inforService.getRecepients()
        ).subscribe(
            data => {

                this.mileStonedataSourceList = data[0];
                this.recepientsdataSourceList = data[1];
            },
            err => console.error(err)
            );
    }
    ngOnInit() {
        this.form = new FormGroup({
            Id: new FormControl(),
            InformationRequired: new FormControl('', Validators.required),
            RecepientID: new FormControl('',   Validators.required),
            MileStoneID: new FormControl('',Validators.required )
        });
        this.getMileStoneAndRecepient();
    }

    onSelectMileStone(selectedItem) {
              console.log('MileStone Selected' + selectedItem.target.value);
              this.invalidMileStone = this.checkIfSelectedItemIsValid(selectedItem.target.value);
    }
    onSelectRecepient(selectedItem) {
        console.log('Recepient Selected' + selectedItem.target.value);
        this.invalidRecepient = this.checkIfSelectedItemIsValid(selectedItem.target.value);
    }
    checkIfSelectedItemIsValid(value)
    {   if (value === '-1')
        { return true;  }
        else{return false; }
    }
    saveInformationRequest(form) {
         this.inforService.addInformationRequest(JSON.stringify(this.form.value)).subscribe(
             infor =>{ console.log(infor); }
            , error => this.errorMessage = <any>error,
            () => {   console.log('Done'); this.gotoInformationRequest();}
        )
            ;
    }
    validateForm()
    {
        if(this.form.valid === true && this.invalidMileStone === false && this.invalidRecepient === false)
        { return false;}
        else{ return true;}
    }
    gotoInformationRequest() { this.router.navigate(['/informationrequests']); }
}

