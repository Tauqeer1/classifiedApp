import { Component } from '@angular/core';


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {

    title: string = 'Register Component';
    user: IUser = {
        name: '',
        email: '',
        password: '',
        profile: null
    };
    constructor() { }

    handleFiles(event) {
        this.user.profile = event.target.files[0];
    }
    register() {  
        console.log('registerForm', this.user);

    }
}
export interface IUser {
    name: string,
    email: string,
    password: string,
    profile: File,
}