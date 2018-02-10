import { Component } from '@angular/core';
import { SessionService } from '../shared/session/session.service';
import { Session } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private session: SessionService, private router: Router) {

  }

  public signInClicked() {
    this.session.Token = 'token-value';
    this.router.navigate(['/home']);
  }
}
