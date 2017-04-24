import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    constructor(private _authService: AuthService) {
    }

    login(valid, value) {
        if (!valid) {
            return;
        }
        this._authService.login(value);
    }
}