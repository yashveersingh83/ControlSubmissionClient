import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { MileStoneService } from './milestone.service';
import { MileStoneModel } from '../models/milestoneModel';
import { slideToRight } from '../router.animations';
import { Subscription } from 'rxjs/Subscription';
@Component(
    {

        template: `<br />
<br />
<br />
<br /><h3>Milestones</h3>
 <div *ngIf="mileStone">        
    <label>Id: </label>{{mileStone.Id}} 
    <label>Name </label>{{mileStone.Name}}
    <button (click)="gotoMileStones()" > Back </button>
</div> `,
 animations: [slideToRight()],
        host: {'[@slideToRight]': ''}
                      
    }
)
export class MileStoneDetailComponent implements OnInit, OnDestroy
{
    mileStone: MileStoneModel;
    errorMessage:string
  private sub: Subscription;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MileStoneService) { }
    ngOnInit() {
        
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
             this.service.getMilestone(id).subscribe(
                 milestones => this.mileStone = milestones,
                error => this.errorMessage = <any>error);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    gotoMileStones() { this.router.navigate(['/milestones']); }
}



