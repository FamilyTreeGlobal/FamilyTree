import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { SignupComponent } from './login/signup.component';

declare var System: any;

export const ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
     { path: 'forgotPassword', component:ForgotpasswordComponent },
     { path: 'signup', component:SignupComponent },
     { path: '', loadChildren: './layout/layout.module#LayoutModule' },
     { path: '', loadChildren: './login/login.module#LoginModule' }  
];