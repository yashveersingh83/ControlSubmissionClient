import {Component, OnInit, OnDestroy} from '@angular/core';
import {SelectListItem} from '../models/selectListItem';
import {MileStoneService} from './milestone.service';
import { MileStoneModel} from '../models/milestoneModel'
import { slideToRight } from '../router.animations';
import { Router }              from '@angular/router';
import {PaginationDirective} from "../directive/paging.directive";
import {CollapseOnClick} from "../directive/collapse-on-click.directive";
@Component(
    {
        selector: 'milestoneList',
        // moduleId: module.id,
        templateUrl: './milestone.html',
        providers: [MileStoneService],
        animations: [slideToRight()],
        host: {'[@slideToRight]': ''}
    }
)

export class MileStoneComponent implements OnInit {

    public currentPage: number = 1;
    public totalItems: number = 1;
    public maxSize: number = 3;
   
    milestones: MileStoneModel[];
    errorMessage: string;
    mileStoneName: string;
   
    constructor(private _service: MileStoneService, private router: Router) {
       
    }
    public setPage(pageNo: number): void {
        this.currentPage = pageNo;
        console.log('curretpage: ' + pageNo);
    };

    public pageChanged(event: any): void {
        console.log('Number items per page: ' + event.itemsPerPage);
        this.getMileStones(this.currentPage, this.maxSize);     
    };

    ngOnInit()
    {
        this.getMileStones(this.currentPage, this.maxSize);   
        
     
    }

    private getMileStones(currentPage:number, pageSize:number) {

        this._service.getPagedMilestones(currentPage, pageSize)
            .subscribe(
            milestones => {
            this.milestones = milestones.data; this.totalItems = milestones.total;
            },                     
            error => this.errorMessage = <any>error            
        );  
        
      
    }    
    onSelect(milestone: MileStoneModel) {
        this.router.navigate(['/milestones', milestone.Id]);
    }
    onAdd() {
        this.router.navigate(['/milestones/add']);
    }
    onSearch(mileStoneName:string) {
        
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
