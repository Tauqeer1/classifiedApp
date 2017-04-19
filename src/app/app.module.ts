import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Routes
import { appRoutes } from './routes/app.route';

//Services
import { HttpService, UserService } from './services';

//Components
import { AppComponent } from './index';
import { RegisterComponent, LoginComponent } from './components';

@NgModule({
    /** Root App Component */
    bootstrap: [AppComponent],
    /** Our Components */
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forRoot(appRoutes),
        UniversalModule
    ],  
    providers: [HttpService, UserService]
})
export class AppModule {

}
