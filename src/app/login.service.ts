
import  {BehaviorSubject} from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {AppRecepientService} from './app.static.service';
@Injectable() 
export class LoginService {
   public currentUser = new BehaviorSubject<string>(null);

    broadcastTextChange(text: string) {
        this.currentUser.next(text);
    }
}