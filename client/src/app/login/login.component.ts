import { Component } from '@angular/core';
import { SessionService } from '../shared/session/session.service';
import { Session } from 'protractor';
import { Router } from '@angular/router';
import { LoginViewModel } from './login.viewmodel';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from './loginDTO.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  public vm: LoginViewModel;

  constructor(private session: SessionService, private router: Router, private http: HttpClient) {
    this.vm = new LoginViewModel();
  }

  public getUsernameErrorVisible(): boolean {

    // tslint:disable-next-line:no-debugger
    debugger;
    return (this.vm.UsernameError !== null &&  this.vm.LoginButtonClicked);
  }

  public getPasswordErrorVisible(): boolean {

    // tslint:disable-next-line:no-debugger
    debugger;
    return (this.vm.PasswordError !== null &&  this.vm.LoginButtonClicked);
  }

  public signInClicked() {
    let errors = false;
    this.vm.LoginButtonClicked = true;

    if (this.vm.loginDTO.Username === null) {
      this.vm.UsernameError = 'Username cannot be empty';
      errors = true;
    } else {
      this.vm.UsernameError = null;
    }

    if (this.vm.loginDTO.Password === null) {
      this.vm.PasswordError = 'Password cannot be empty';
      errors = true;
    } else {
      this.vm.PasswordError = null;
    }

    if (!errors) {
      this.http.post<string>('/api/login/gettoken', this.vm.loginDTO).subscribe(p => {
        this.session.Token = p;
        this.router.navigate(['/home']);
      }, error => {
        this.session.Token = null;
        this.vm.AuthError = error;
      });
    }
  }
}
