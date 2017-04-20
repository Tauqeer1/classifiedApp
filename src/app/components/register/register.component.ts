import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {

    title: string = 'Register Component';
    /*user: IUser = {
        name: '',
        email: '',
        password: '',
        profile: null
    };*/
    constructor(private _userService: UserService, private router: Router) { }

    /*handleFiles(event) {
        this.user.profile = event.target.files[0];
    }*/
    register(valid, value) {
        if(!valid) {
            return;
        }  
        this._userService.create(value)
            .subscribe(
                data => {
                    if(data.success) {
                        this.router.navigate(['/login']);
                    }
                },
                error => {
                    console.error('error', error);
                }
            )
    }
}