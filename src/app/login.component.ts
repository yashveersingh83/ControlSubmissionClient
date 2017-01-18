import {LoginService} from './login.service';

export class LoginComponent {
  constructor(private loginService: LoginService) {}

  onLogin() {
    this.loginService.changes.next(true);
  }
}