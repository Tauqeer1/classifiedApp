import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.route';

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
    providers: []
})
export class AppModule {

}
