import { Routes, RouterModule } from '@angular/router';
import {
    RegisterComponent,
    LoginComponent,
    DashboardComponent
} from '../components';



export const appRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'dashboard' }
]