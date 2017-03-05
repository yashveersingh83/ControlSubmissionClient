import { MileStoneModel } from '../models/milestoneModel';
import { SelectListItem } from '../models/selectListItem';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { IPagedResponse } from '../models/PagedResult';
import 'rxjs/Rx';
import  { Constants } from '../constants';

@Injectable()
export class MileStoneService
{
    data: MileStoneModel[];
    private pagedResult: IPagedResponse<MileStoneModel>;

    mileStones: MileStoneModel[]
    private url: string = Constants.mileStoneApi;
    constructor(private http: Http) {
    }
    getMilestones(): Observable<MileStoneModel[]> {

        return this.http.get(this.url)
            .map((response: Response) => <MileStoneModel[]>response.json())
            .catch(this.handleError);


    }

    getSelectListMilestones(): Observable<SelectListItem[]> {

        return this.http.get(this.url)
            .map((response: Response) => <MileStoneModel[]>response.json())
            .map((mileStones: MileStoneModel[]) => {

                return mileStones.map(mileStone => {
                    let t = mileStone.StartDate.toString();
                    let i = new SelectListItem(mileStone.Id, t);
                    return i;
                });
            })
            .catch(this.handleError);
    }


    getPagedMilestones(page: number, pageSize: number): Observable<IPagedResponse<MileStoneModel>> {

        return this.http.get(this.url + '/' + page + '/' + pageSize)
            .map((response: Response) => {
                return this.extractPagedData(response);

            })
            .catch(this.handleError);


    }

    getMilestone(id: number): Observable<MileStoneModel> {

        return this.http.get(this.url + '/' + id)
            .map((response: Response) => <MileStoneModel>response.json())
            .catch(this.handleError);

    }
    searchMileStones(name: string): Observable<IPagedResponse<MileStoneModel>> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.url + '/search/' + name)
            .map((response: Response) => {
                return this.extractPagedData(response);

            })
            .catch(this.handleError);
    }
    addMileStone(formdata: string) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, formdata, options)
            .map((response: Response) => <MileStoneModel>response.json())
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

    private extractPagedData(res: Response): IPagedResponse<MileStoneModel> {
        let body = res.json();
        console.log('result' + body.Data);
        return {
            data: <MileStoneModel[]>body.Data,
            total: body.Total

        };
    }
}