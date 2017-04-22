import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';

import { IUser } from '../../models';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
    
    user: IUser;
    constructor(private authService: AuthService) {
        this.authService.user$.subscribe(user => {
            console.log('user', user);
            
            if(user.token) {
                console.log('working');
                this.user = user;
            }
        })
    }

    logout() {
        this.authService.logout();
    }
}