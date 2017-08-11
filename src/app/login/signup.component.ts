import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {  FormGroup, Validators  , FormBuilder, FormControlName  , FormControl} from '@angular/forms';
import { ValidationService } from '../validation.service';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { LoginService  } from '../../_services/index';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  encapsulation: ViewEncapsulation.None,
  providers:[LoginService]
})
export class SignupComponent implements OnInit {
  
  private signupForm: FormGroup;
  private isPageLoad: boolean = true;
  private loginService: LoginService;
  private signupComplete = false;

  constructor(private router: Router,loginService: LoginService) {
    this.loginService = loginService;
   }

  ngOnInit() {
    
  }

  signup(val: any, valid: any) {
    this.isPageLoad=false;    
    console.log(this.signupForm.value);
    this.loginService.register(this.signupForm.value)
            .subscribe(
                data => {                   
                    //this.router.navigate(['/home']);
                    this.signupComplete=true;
                    this.signupForm.reset();
                },
                error => {
                    //this.alertService.error(error); 
                    this.signupComplete=false;                   
                });
  }

}
