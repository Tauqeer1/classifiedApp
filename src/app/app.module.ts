import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Routes
import { appRoutes } from './routes/app.route';

//Services
import { HttpService, UserService, AuthService, PostService } from './services';
import { AuthGuard } from '../app/guards';

//Pipes 
import { PricePipe } from './pipes/price.pipe';
//Components
import { AppComponent } from './index';
import {
    NavigationComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    PostsComponent,
    AddPostComponent,
    PostCardComponent,
    PostDetailComponent
} from './components';

@NgModule({
    /** Root App Component */
    bootstrap: [AppComponent],
    /** Our Components */
    declarations: [
        AppComponent,
        NavigationComponent,
        RegisterComponent,
        LoginComponent,
        DashboardComponent,
        PostsComponent,
        AddPostComponent,
        PostCardComponent,
        PostDetailComponent,
        PricePipe
    ],
    imports: [
        FormsModule,
        RouterModule.forRoot(appRoutes),
        UniversalModule
    ],
    providers: [HttpService, UserService, AuthService, PostService, AuthGuard]
})
export class AppModule {

}
