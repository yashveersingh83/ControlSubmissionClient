        import {SelectListItem} from '../models/selectListItem';
        import { Component, OnInit, OnDestroy } from '@angular/core';
        import { Router, ActivatedRoute }       from '@angular/router';
        import { InformationRequestService } from './informationrequest.service';
       
        import {MileStoneModel} from '../models/milestoneModel';
        import { FormBuilder, FormGroup, FormControl ,Validators} from '@angular/forms';
        import { Subscription } from 'rxjs/Subscription';
        import { Observable }     from 'rxjs/Observable';
        @Component(
            {
               
                templateUrl: './addinformationrequest.html'    ,
                providers: [InformationRequestService]
            }
        )
        export class AddInformationRequestComponenet implements OnInit {

            mileStonedataSourceList: SelectListItem[];
            mid: string = 'milestone';
            selectedMileStone: number; selectedRecepient: number;
            errorMessage: string;milestomes: MileStoneModel[];
            form: FormGroup;

            recepientsdataSourceList: SelectListItem[];
            constructor(private inforService: InformationRequestService//, private mileStoneService: MileStoneService
            )
            {
                this.inforService = inforService;
                //this.mileStoneService = mileStoneService;
                this.mileStonedataSourceList = [];
               // this.getMileStones();
            }

            getMileStoneAndRecepient() {
                Observable.forkJoin(
                    this.inforService.getMileStones(),
                    this.inforService.getRecepients()
                ).subscribe(
                    data => {
                        debugger;
                        this.mileStonedataSourceList = data[0];
                        
                        this.recepientsdataSourceList = data[1];
                        console.log(data[1]);
                    },
                    err => console.error(err)
                    );
            }
            ngOnInit() {
               // this.getMileStones();
                    this.form = new FormGroup({  Id: new FormControl(),
                        InformationRequired: new FormControl('', Validators.required),                   
                        RecepientID: new FormControl('', Validators.required),
                        MileStoneID: new FormControl('', Validators.required)
                }); 
                    this.getMileStoneAndRecepient();   
            }

          onSelectMileStone(selectedItem)
          {
             console.log("MileStone Selected"+ selectedItem);
          }
           onSelectRecepient(selectedItem)
          {
             console.log("Recepient Selected"+ selectedItem);
          }

          saveInformationRequest(form)
          {
              debugger;
              console.log(this.form.valid);
              this.inforService.addInformationRequest(JSON.stringify(this.form.value)).subscribe(
                  error => this.errorMessage = <any>error,
                  () => { console.log("Done"); }
              )
                  ;
          }
            //getMileStones() {       
            //    // here when I push hardcoded values it works fine but when service call happen it dont work 
            //    //this.mileStonedataSourceList.push(new SelectListItem(1, "a"));
            //    this.mileStoneService.getSelectListMilestones()
            //   .subscribe((t) => {
            //                 setTimeout(() => {
            //                             this.mileStonedataSourceList = t;
            //                              console.log(this.mileStonedataSourceList);
            //                             });
                    
            //    },
            //     e => console.log('onError: %s', e),
            //     () => {      console.log("Done"); }
                    

            //   ); 
                
            //}
            onMileStoneSelect(selectedItem) {        
                this.selectedMileStone = selectedItem;
                this.selectedMileStone = selectedItem;
                console.log(this.selectedMileStone);
            }
        }