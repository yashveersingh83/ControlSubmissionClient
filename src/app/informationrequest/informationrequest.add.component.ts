import { SelectListItem } from '../models/selectListItem';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { InformationRequestService } from './informationrequest.service';
import { MileStoneModel } from '../models/milestoneModel';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component(
    {
        templateUrl: 'addinformationrequest.html',
        providers: [InformationRequestService]
    }
)
export class AddInformationRequestComponenet implements OnInit {

    mileStonedataSourceList: SelectListItem[];
    selectedMileStone: number; selectedRecepient: number;
    errorMessage: string; milestomes: MileStoneModel[];
    form: FormGroup;

    recepientsdataSourceList: SelectListItem[];
    constructor(private inforService: InformationRequestService
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
            RecepientID: new FormControl('', Validators.required),
            MileStoneID: new FormControl('', Validators.required)
        });
        this.getMileStoneAndRecepient();
    }

    onSelectMileStone(selectedItem) {
        
        console.log('MileStone Selected' + selectedItem);
    }
    onSelectRecepient(selectedItem) {
        console.log('Recepient Selected' + selectedItem);
    }

    saveInformationRequest(form) {
        console.log(this.form);
        console.log(this.form.valid);
        this.inforService.addInformationRequest(JSON.stringify(this.form.value)).subscribe(
            error => this.errorMessage = <any>error,
            () => {   console.log('Done'); }
        )
            ;
    }
    onMileStoneSelect(selectedItem) {
      //  debugger;
       // this.selectedMileStone = selectedItem;
       // this.form.controls['MileStoneID'].value = selectedItem;
     //   console.log('ssss ' + this.selectedMileStone);
    }
}