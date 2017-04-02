import { RecepientModel} from '../models/recepientModel'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import  { Constants } from '../constants';
@Injectable()
export class RecepientService {
    recepients: RecepientModel[]
    private url: string = Constants.recepientApi;
      headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers
        //, withCredentials: true 
    });
    constructor(private http: Http) {
    }
    getRecepients(): Observable<RecepientModel[]> {

        return this.http.get(this.url,this.options)
            .map((response: Response) => <RecepientModel[]>response.json()) 
            .catch(this.handleError);
    }

    getPagedRecepient(page: number): Observable<RecepientModel[]> {

        return this.http.get(this.url, this.options)
            .map((response: Response) => <RecepientModel[]>response.json())
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data  || {};
    }
    getRecepient(id: number): Observable<RecepientModel> {

        console.log('URL:' + this.url);
        return this.http.get('http://localhost/ControlSubmissionApi/api/Recepients'+"/"+id  ,  this.options)
            .map((response: Response) => <RecepientModel>response.json())
            .catch(this.handleError);

    }
    searchRecepients(name: string): Observable<RecepientModel[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        return this.http.get(this.url+"/search/"+name)
            .map((response: Response) => <RecepientModel[]>response.json())
            .catch(this.handleError);
    }
    addRecepient(formdata: string) {
       
        return this.http.post(this.url, formdata, this.options)
            .map((response: Response) => <RecepientModel>response.json())
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

}