import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private session: SessionService) {}

    public canActivate(): boolean {

        if (this.session.Token !== null) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
