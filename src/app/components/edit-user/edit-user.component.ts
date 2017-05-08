import { Component, Input } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { IUser } from './../../models/user';


@Component({
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent {

    user: IUser;
    file: File;
    image: string;
    constructor(private _authService: AuthService, private _userService: UserService) {
        this._authService.user$.subscribe(user => {
            if (user.token) {
                this.user = user;
            }
        })
    }
    saveUser(valid, value) {
        if (!valid) {
            return;
        }
        if (this.file) {
            value['profile'] = this.image;
            this._userService.updateUser(this.user.id, value);
        }
        else {
            this._userService.updateUser(this.user.id, value);
        }
    }
    getFile(event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.file = fileList[0];
            let fileReader: FileReader = new FileReader();
            fileReader.onload = (e) => {
                this.image = fileReader.result;
            }
            fileReader.readAsDataURL(this.file);
        }
    }
}