import { MileStoneModel } from '../models/milestoneModel';
import { MileStoneService } from './milestone.service';
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';
export class StaticMileStoneService extends RecepientService
{
    // tslint:disable-next-line:no-unused-variable
     data: MileStoneModel[]=[];
     selectedRecord= new MileStoneModel('Yashveer', 'Singh',);
      mockResponse = [
        { 'Id': 5, 'FirstName': 'Yashveer', 'LastName': 'Singh', 'Division': 'A' },
        { 'Id': 6, 'FirstName': 'Akshveer', 'LastName': 'Singh', 'Division': 'B' },
        { 'Id': 7, 'FirstName': 'M', 'LastName': 'D', 'Division': 'G' },
        { 'Id': 1007, 'FirstName': 'olex', 'LastName': 'T', 'Division': 'T' }
    ];
    getRecepients(): Observable<MileStoneModel[]> {
        console.log('calling static getMileStoneModels');
        return  Observable.of(this.mockResponse);
    }
    getRecepient(id: number): Observable<MileStoneModel> {
        console.log('calling static getMileStoneModel');
     this.mockResponse.filter( i => i.Id === id )
      .map ( (r: MileStoneModel) => {  this.selectedRecord = r; } );

         return  Observable.of(this.selectedRecord);
    }

}