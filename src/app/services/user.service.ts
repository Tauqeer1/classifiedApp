import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

import { IUser } from '../models/user';

@Injectable()
export class UserService {

    user$: BehaviorSubject<IUser> = new BehaviorSubject<any>({});
    constructor(private _hs: HttpService) { 

    }

    create(user: Object) {
        return this._hs.PostRequest('/api/users', user);
    }

    updateUser(id: string, user: Object) {
        
        this._hs.PutRequest('/api/users/'+id, user)
            .subscribe(res => {
                if(res.success){
                    let user = res.data;
                    this.user$.next(user);
                }
            })
    }
}