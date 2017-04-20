import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    constructor(private _hs: HttpService) { 

    }

    create(user: Object) {
        return this._hs.PostRequest('/api/users', user);
    }
}