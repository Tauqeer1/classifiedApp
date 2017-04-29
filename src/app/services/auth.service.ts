import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IUser } from '../models';

@Injectable()
export class AuthService {
    
    user$: BehaviorSubject<IUser> = new BehaviorSubject(this.getUser());
    
    constructor(private _hs: HttpService, private router: Router) {
        
    }

    login(obj: Object) {
        this._hs.PostRequest('/api/auth', obj)
            .subscribe(res => {
                if (res.success) {
                    let user = res['data'];
                    window.localStorage.setItem('user', JSON.stringify(user));
                    this.user$.next(user);
                    this.router.navigate(['/']);
                }
                else {
                    console.log('error', res);
                }
            },
            err => {
                console.error('err', err.json());
            })
    }
    getUser() {
        return window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : { id: '', username: '', email: '', role: '', token: '' };
	}

    logout() {
        window.localStorage.removeItem('user');
        this.user$.next(this.getUser());
        this.router.navigate(['/login']);
    }
}