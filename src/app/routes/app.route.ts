import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../guards';
import {
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AddPostComponent
} from '../components';



export const appRoutes: Routes = [

    { path: '', component: DashboardComponent },
    { path: 'add-post', component:  AddPostComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' }
]