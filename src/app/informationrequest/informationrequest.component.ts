import {Component, OnInit, OnDestroy} from '@angular/core';
import {InformationRequestService} from './informationrequest.service'
import { Router }              from '@angular/router';
import {InformationRequest} from '../models/informationrequestModel';
import { Observable }     from 'rxjs/Observable';

@Component({
  //  moduleId: module.id,
    templateUrl: './informationrequest.html'

})
export class InformationRequestComponent implements OnInit
{
    informationrequests: InformationRequest[];
    errorMessage: string;

    public currentPage: number = 1;
    public totalItems: number = 1;
    public maxSize: number = 3;

    constructor(private _service: InformationRequestService, private router: Router) {
    }

    ngOnInit() {      
        this.getInformationRequests(this.currentPage,this.maxSize);
       // var t = deserializeArray(this.informationrequests,InformationRequest);
    }
    public setPage(pageNo: number): void {
        this.currentPage = pageNo;
        console.log('curretpage: ' + pageNo);
    };

    public pageChanged(event: any): void {
        console.log('Number items per page: ' + event.itemsPerPage);
        this.getInformationRequests(this.currentPage, this.maxSize);
    };
    getInformationRequests(currentPage: number, pageSize: number) {
        console.log("0t");
        this._service.getPagedInformationRequests(currentPage,pageSize).subscribe(

            i => {
            this.informationrequests = i.data;
            this.totalItems = i.total;
            console.log(i.total);
            },
            error => this.errorMessage = <any>error
        );
    }
    onAdd()
    {
        this.router.navigate(['/informationrequest/add']);
    }
}