import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {RecepientModel} from '../models/recepientModel';
import {RecepientService} from './recepient.service'
import {Subscription} from 'rxjs/Subscription';
import { slideToRight } from '../router.animations';
@Component(
    {        template: `<br/><br/><br/><h3>recepient</h3>
 <div *ngIf="recepient">        
    {{recepient.Id}} 
   
</div> `,
 animations: [slideToRight()],
        host: {'[@slideToRight]': ''}

    }
)
export class RecepientDetailComponent implements OnInit , OnDestroy
{
    recepient: RecepientModel;
    errorMessage: string;
    private sub: Subscription;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: RecepientService) { }

    ngOnInit()
    {
       
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                
                this.service.getRecepient(id).subscribe(
                    r => {
                    this.recepient = r;
                  
                    },
                    error => this.errorMessage = <any>error);

                
            });
     
        
    }

    ngOnDestroy()
    {
        this.sub.unsubscribe();
    }
    gotoRecepients() { this.router.navigate(['/recepients']); }
}