import {InformationRequest} from '../models/informationrequestModel';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { MileStoneModel} from '../models/milestoneModel'
import { RecepientModel} from '../models/recepientModel'
import {SelectListItem} from '../models/selectListItem';
import { Injectable } from '@angular/core'
import { Observable }     from 'rxjs/Observable';
import {IPagedResponse} from '../models/PagedResult';
import {MileStoneService} from '../mileStone/milestone.service';
import {RecepientService} from '../recepient/recepient.service'
import  { Constants } from '../constants';


@Injectable()
export class InformationRequestService {
    data: InformationRequest[];
    //private _page: number = 1;
    total: number;

    private pagedResult: IPagedResponse<InformationRequest>;

    mileStones: InformationRequest[]
    private url: string = Constants.informationRequestApi;
    constructor(private http: Http , private mileStoneService:MileStoneService,private recepientService:RecepientService ) {


    }
    getInformationRequests(): Observable<InformationRequest[]> {

        return this.http.get(this.url)
            .map((response: Response) =><InformationRequest[]> response.json() )
            ;
           
    }
   
    getMileStones(): Observable<SelectListItem[]> {
           return this.mileStoneService.getSelectListMilestones() ;

    }
    getRecepients() :Observable<SelectListItem[]> {
         return  this.recepientService.getRecepients()            
            .map((recepients: RecepientModel[]) => {

                return recepients.map(recepient => {
                    //  console.log(mileStone);
                    let i = new SelectListItem(recepient.Id, (recepient.FirstName + " "+ recepient.LastName) )

                    // console.log(i);   
                    return i;
                });
            })
            .catch(this.handleError);

    }

    getPagedInformationRequests(page: number, pageSize: number): Observable<IPagedResponse<InformationRequest>> {

        return this.http.get(this.url + "/" + page + "/" + pageSize)
            .map((response: Response) => {
                return this.extractPagedData(response);

            })
            .catch(this.handleError);


    }

    getInformationRequest(id: number): Observable<InformationRequest> {

        return this.http.get(this.url + "/" + id)
            .map((response: Response) => <InformationRequest>response.json())
            .catch(this.handleError);

    }
    searchInformationRequests(name: string): Observable<IPagedResponse<InformationRequest>> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.url + "/search/" + name)
            .map((response: Response) => {
                return this.extractPagedData(response);

            })
            .catch(this.handleError);
    }
    addInformationRequest(formdata: string) {
        //let body = JSON.stringify({ newMileStone });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, formdata, options)
            .map((response: Response) => <InformationRequest>response.json())
            .catch(this.handleError);

    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    
    private extractData(res: Response) {

        let body = res.json();
        return body.data || {};
    }

    private extractPagedData(res: Response): IPagedResponse<InformationRequest> {

        let body = res.json();
        console.log("result" + body);
        return {
            data: <InformationRequest[]>body.Data,
            total: body.Total
        }

    }

}