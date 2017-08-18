
import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {  FormGroup, Validators  , FormBuilder, FormControlName  , FormControl} from '@angular/forms';
import { ValidationService } from '../validation.service';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { LoginService  } from '../../_services/index';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[LoginService]
})
export class SignupComponent implements OnInit {
  
  private signupForm: FormGroup;
  private isPageLoad: boolean = true;
  private loginService: LoginService;
  private signupComplete = false;
  private userExists=false;
  private isValidated =true;

  constructor(private router: Router,loginService: LoginService,private formBuilder: FormBuilder) {
    this.loginService = loginService;
    this.signupForm = this.formBuilder.group({
            'fullname':['', [Validators.required]],
            'surname':['', [Validators.required]],
            'gender':['', [Validators.required]],
            'dob':['', [Validators.required]],            
            'email':['', [Validators.required, ValidationService.emailValidator]],
            //'phone':['', [Validators.required]],            
            'maritalstatus':['', [Validators.required]], 
            'password': ['', [Validators.required, ValidationService.passwordValidator]]
        });
   }

  ngOnInit() {
    
  }

  signup(val: any, valid: any) {
    this.isPageLoad=false;    
    if (this.signupForm.valid) {
      this.isValidated=true;
    console.log(this.signupForm.value);
    this.loginService.register(this.signupForm.value)
            .subscribe(
                data => {      
                  if(data.result==1)
                    {
                      this.userExists=true;
                      
                    }else if(data.result==2){
                      this.signupComplete=true;  
                      this.signupForm.reset();
                    }
                   //console.log('data.result:'+data.result);
                    //this.signupComplete=true;
                   // this.signupForm.reset();
                },
                error => {
                    //this.alertService.error(error); 
                    this.signupComplete=false;                   
                });
    }else{
      this.isValidated=false;
    }
  }

}
