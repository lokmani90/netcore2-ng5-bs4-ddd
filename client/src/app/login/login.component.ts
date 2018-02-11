import { Component } from '@angular/core';
import { SessionService } from '../shared/session/session.service';
import { Session } from 'protractor';
import { Router } from '@angular/router';
import { LoginViewModel } from './login.viewmodel';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  public vm: LoginViewModel;

  constructor(private session: SessionService, private router: Router, private http: HttpClient) {

  }

  public signInClicked() {
    let errors = false;

    if (this.vm.loginDTO.Username === '') {
      this.vm.UsernameError = 'Username cannot be empty';
      errors = true;
    }
    if (this.vm.loginDTO.Password === '') {
      this.vm.PasswordError = 'Password cannot be empty';
      errors = true;
    }



    this.session.Token = 'token-value';
    this.router.navigate(['/home']);
  }
}
