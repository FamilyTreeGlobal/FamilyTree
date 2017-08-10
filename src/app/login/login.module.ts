import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { LoginComponent } from './login.component';
import { ValidationService } from '../validation.service';
import { ControlMessages } from './controlMessages';
import { ForgotpasswordComponent } from './forgotpassword.component';
import {LoginRoutingModule} from './login.router';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        LoginRoutingModule,
        HomeModule
     ],
    declarations: [
      LoginComponent,
      ControlMessages,
      ForgotpasswordComponent
        ],
    providers: [
        ValidationService
    ]

})
export class LoginModule {

}
