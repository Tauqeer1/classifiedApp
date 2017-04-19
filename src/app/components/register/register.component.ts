import { Component } from '@angular/core';


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {

    title: string = 'Register Component';
    constructor() { }


    register(valid, value) {    
        if(!valid) {
            return;
        }
        console.log('valid', valid);
        console.log('value', value);

    }
}