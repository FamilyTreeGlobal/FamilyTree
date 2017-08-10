import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { LoginComponent } from './login.component';
import { HomeComponent } from '../home/home.component';
import { ForgotpasswordComponent }  from './forgotpassword.component';
@NgModule({
  imports: [RouterModule.forChild([
     {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'forgotPassword',
        component : ForgotpasswordComponent
      },
      {
        path : 'home',
        component : HomeComponent
      }
  ])],
  exports : [RouterModule]
})
export class LoginRoutingModule {}
