import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
    
    title: string = 'navigation';

    constructor(private authService: AuthService) {
        this.authService.user$.subscribe(user => {
            console.log('user', user);
        })
    }
}