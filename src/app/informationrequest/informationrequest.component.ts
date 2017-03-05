import {Component, OnInit, OnDestroy} from '@angular/core';
import {InformationRequestService} from './informationrequest.service'
import { Router }              from '@angular/router';
import {InformationRequest} from '../models/informationrequestModel';
import { Observable }     from 'rxjs/Observable'
import {FormGroup,ReactiveFormsModule,FormBuilder} from '@angular/forms';
import { slideToRight } from '../router.animations';
import { DevExtremeModule } from 'devextreme-angular';
@Component({
  //  moduleId: module.id,
    templateUrl: './informationrequest.html',
        animations: [slideToRight()],
        host: {'[@slideToRight]': ''}

})
export class InformationRequestComponent implements OnInit
{
    informationrequests: InformationRequest[];
    errorMessage: string;
    outerCounterValue: number= 4;
form: FormGroup;
    public currentPage: number = 1;
    public totalItems: number = 1;
    public maxSize: number = 3;

    constructor(private _service: InformationRequestService, private router: Router,private fb: FormBuilder) {
    }

    ngOnInit() {      
        this.getInformationRequests(this.currentPage,this.maxSize);
       this.form = this.fb.group({
      counter: 5
    });
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