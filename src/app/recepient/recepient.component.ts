import {Component, OnInit, OnDestroy} from '@angular/core';
import {RecepientService } from './recepient.service';
import { RecepientModel} from '../models/recepientModel';
import { slideToRight } from '../router.animations';
import { Router }       from '@angular/router';
@Component(
    {
        selector: 'recepientList',
      //  moduleId: module.id,
        templateUrl:'./recepient.html',
        providers: [RecepientService],
     /*   animations: [slideToRight()],
        host: {'[@slideToRight]': ''}*/
    }
)
export class RecepientComponent implements OnInit {
    public recepients: RecepientModel[]=[];
    errorMessage: string = 'none';
    recepientsName: string;
    constructor(private _service: RecepientService, private router: Router) {

    }

    ngOnInit() {
        console.log('init');
        this.getRecepients();
    }

    public getRecepients() {
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