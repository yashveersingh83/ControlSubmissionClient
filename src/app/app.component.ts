import { Component ,  OnInit } from '@angular/core';
import {LoginService} from './login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit  {
  title = 'ControlSubmissionClient';
  totalMileStones = 0;
 totalRecepients = 2;
 isLoggedIn : string;
 currentDate :string;
  constructor (private service:  LoginService)
  {
 this.service.currentUser.subscribe((val) => {
   this.isLoggedIn = val;
      console.log(val);
    });
    this.currentDate =  new Date().toString('yyyy/mm/dd');
    console.log('date'+ this.currentDate);

  }
   ngOnInit() {
        console.log('init');
    }
    onLogin() {
       console.log('onLogin from appcpomp');
       this.service.broadcastTextChange("newuser");
  }
  private loginSuccess(res: string) {
    this.isLoggedIn  = "yashn";
  }
}
