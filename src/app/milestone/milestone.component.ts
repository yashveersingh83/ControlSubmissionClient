import { Component, OnInit, OnDestroy } from '@angular/core';
import { MileStoneService } from './milestone.service';
import { MileStoneModel } from '../models/milestoneModel'
import { slideToRight } from '../router.animations';
import { Router } from '@angular/router';
import { DevExtremeModule } from 'devextreme-angular';
@Component(
    {
        selector: 'milestoneList',
        // moduleId: module.id,
        templateUrl: './milestone.html',
        providers: [MileStoneService],
        animations: [slideToRight()],
        host: { '[@slideToRight]': '' }
    }
)

export class MileStoneComponent implements OnInit {

    public currentPage: number = 1;
    public totalItems: number = 1;
    public maxSize: number = 3;
 loadIndicatorVisible = false;
    milestones: MileStoneModel[];
    errorMessage: string;
    mileStoneName: string;

    constructor(private _service: MileStoneService, private router: Router) {
 this.loadIndicatorVisible = true;
    }
    public setPage(pageNo: number): void {
        this.currentPage = pageNo;
        console.log('curretpage: ' + pageNo);
    };

    public pageChanged(event: any): void {
        console.log('Number items per page: ' + event.itemsPerPage);
        this.getMileStones(this.currentPage, this.maxSize);
    };

    ngOnInit() {
        this.getMileStones(this.currentPage, this.maxSize);


    }

    private getMileStones(currentPage: number, pageSize: number) {
  setTimeout(function() {
            this.loadIndicatorVisible = true;
        }, 2000);
        this._service.getPagedMilestones(currentPage, pageSize)
            .subscribe(
            milestones => {
                this.milestones = milestones.data; this.totalItems = milestones.total;
            },
            error => this.errorMessage = <any>error ,
            () => {  this.loadIndicatorVisible = false; });


    }
    onSelect(milestone: MileStoneModel) {
        this.router.navigate(['/milestones', milestone.Id]);
    }
    onAdd() {
        this.router.navigate(['/milestones/add']);
    }
    onSearch(mileStoneName: string) {

        this._service.searchMileStones(mileStoneName).subscribe(
            milestones => {
                this.milestones = milestones.data; this.totalItems = milestones.total;
                console.log("total");
                console.log(this.totalItems);
                this.currentPage = 1;


            },
            error => this.errorMessage = <any>error

        );

        this.setPage(this.currentPage);
    }
}