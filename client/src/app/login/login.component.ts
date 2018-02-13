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

  public signInClicked() {
    // tslint:disable-next-line:no-debugger
    debugger;
    let errors = false;

    if (this.vm.loginDTO.Username === '') {
      this.vm.UsernameError = 'Username cannot be empty';
      errors = true;
    }
    if (this.vm.loginDTO.Password === '') {
      this.vm.PasswordError = 'Password cannot be empty';
      errors = true;
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
