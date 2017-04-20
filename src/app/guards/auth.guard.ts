import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router) {}

    canActivate() {
        if(localStorage.getItem('user')) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}