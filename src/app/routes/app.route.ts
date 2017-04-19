import { Routes, RouterModule } from '@angular/router';
import { 
    RegisterComponent, 
    LoginComponent } from '../components';



export const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'login' }
]