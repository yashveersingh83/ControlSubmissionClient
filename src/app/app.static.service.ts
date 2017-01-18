import { RecepientModel } from './models/recepientModel';

import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';
export class AppRecepientService 
{
    // tslint:disable-next-line:no-unused-variable
     data: RecepientModel[]=[];
     selectedRecord= new RecepientModel(5, 'Yashveer', 'Singh', 'A');
      mockResponse = [
        { 'Id': 5, 'FirstName': 'Yashveer', 'LastName': 'Singh', 'Division': 'A' },
        { 'Id': 6, 'FirstName': 'Akshveer', 'LastName': 'Singh', 'Division': 'B' },
        { 'Id': 7, 'FirstName': 'M', 'LastName': 'D', 'Division': 'G' },
        { 'Id': 1007, 'FirstName': 'olex', 'LastName': 'T', 'Division': 'T' }
    ];
    getRecepients(): Observable<RecepientModel[]> {
        console.log('calling static getRecepients');
        return  Observable.of(this.mockResponse);
    }
    getRecepient(id: number): Observable<RecepientModel> {
        console.log('calling static getRecepient');
     this.mockResponse.filter( i => i.Id === id )
      .map ( (r: RecepientModel) => {  this.selectedRecord = r; } );

         return  Observable.of(this.selectedRecord);
    }

}