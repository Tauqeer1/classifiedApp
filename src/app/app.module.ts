import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Routes
import { appRoutes } from './routes/app.route';

//Services
import { HttpService, UserService, AuthService } from './services';

//Components
import { AppComponent } from './index';
import { NavigationComponent, RegisterComponent, LoginComponent, DashboardComponent } from './components';

@NgModule({
    /** Root App Component */
    bootstrap: [AppComponent],
    /** Our Components */
    declarations: [
        AppComponent,
        NavigationComponent,
        RegisterComponent,
        LoginComponent,
        DashboardComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forRoot(appRoutes),
        UniversalModule
    ],  
    providers: [HttpService, UserService, AuthService]
})
export class AppModule {

}
