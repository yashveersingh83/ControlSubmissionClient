import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {LoginService}  from  '../login.service';
import { LogedInUserModel } from '../models/loginUserModel';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user:LogedInUserModel;
    form: FormGroup;
   @Output() loginSuccess = new EventEmitter<string>();
   constructor(private loginService: LoginService) {}

  onLogin() {
    console.log('onLogin' + JSON.stringify (this.form.value) );
    console.log(this.form.controls['Name'].value);
    this.loginService.currentUser.next(this.form.controls['Name'].value);
  }

   ngOnInit() {
        this.form = new FormGroup({
            Name: new FormControl(),
        });
   }
}
