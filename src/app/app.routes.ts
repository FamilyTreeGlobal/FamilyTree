import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
//import { HomeComponent } from './home/home/home.component';
// import { ProfileComponent } from './profile/profile.component';


declare var System: any;

export const ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
     { path: 'forgotPassword', component:ForgotpasswordComponent },
     { path: '', loadChildren: './layout/layout.module#LayoutModule' },
     { path: '', loadChildren: './login/login.module#LoginModule' }
  // {
	// 	path: 'home',
	// 	loadChildren: 'app/home/home.module#HomeModule'
  // },
  
  // { path: 'home', component:HomeComponent }
];