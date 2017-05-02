import { Component, Input } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { IUser } from './../../models/user';


@Component({
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent {

    user: IUser;
    constructor(private _authService: AuthService) {

        this._authService.user$.subscribe(user => {
            if (user.token) {
                this.user = user;
            }
        })
    }

    saveUser(valid, value) {
        if(!valid) {
            return;
        }
    }
    handleFiles(e) {

    }


}