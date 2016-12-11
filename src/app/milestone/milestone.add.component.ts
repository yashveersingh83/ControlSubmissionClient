import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MileStoneService } from './milestone.service';
import { MileStoneModel } from '../models/milestoneModel';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component(
    {
        //  moduleId: module.id,
        templateUrl: './milestoneadd.html',
        providers: [MileStoneService]
    }
)
export class MileStoneAddComponent implements OnInit {
    newMileStone = new MileStoneModel();
    errorMessage: string;
    form: FormGroup;

    constructor(private _service: MileStoneService, private route: ActivatedRoute,
        private router: Router) {
    }
    ngOnInit() {
        this.form = new FormGroup({
            Id: new FormControl(),
            Name: new FormControl(),
            StartDate: new FormControl()
        });
    }
    private saveMileStone() {
        console.log(this.form);
        this._service.addMileStone(JSON.stringify(this.form.value)).subscribe(
            milestones => this.newMileStone = milestones,
            error => this.errorMessage = <any>error,
        );

        this.gotoMileStones();
    }
    gotoMileStones() { this.router.navigate(['/milestones']); }

}