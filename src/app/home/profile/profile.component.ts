import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../../app.module';
import { UserService , LoginService  } from '../../../_services/index';
import {  FormGroup, Validators  , FormBuilder, FormControlName  , FormControl} from '@angular/forms';
import { ValidationService } from '../../validation.service';
import { ForgotpasswordComponent } from '../.././login/forgotpassword.component';
import { ControlMessages } from '../.././login/controlMessages';//'F:\FamilyTree\FamilyTree\src\app\login\controlMessages.ts'
import { USER_DATA } from '../../common/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`../../login/signup.component.css , ../../../assets/css/style.css`],
  encapsulation: ViewEncapsulation.None,
  providers:[UserService , LoginService]

})
export class ProfileComponent implements OnInit {
  private userService: UserService;
  private userupdated=false;
  private isValidated =true;
  private profileForm: FormGroup;
  private isPageLoad: boolean = true;
  private profileUpdateComplete = false;
  private loginService: LoginService;

  constructor(private router: Router , userService: UserService ,loginService: LoginService ,private formBuilder: FormBuilder) {
    this.userService = userService;
     this.profileForm = this.formBuilder.group({
            'fullname':['', [Validators.required]],
            'surname' :['', [Validators.required]],
            'gender'  :['', [Validators.required]],
            'dob'     :['', [Validators.required]],            
           // 'email'   :['', [Validators.required, ValidationService.emailValidator]],
            'phone':['', [Validators.required]],            
            'maritalstatus':['', [Validators.required]], 
            //'password': ['', [Validators.required, ValidationService.passwordValidator]]
        });
   }

  ngOnInit() {
    var token=USER_DATA.token;
    console.log('token:'+token);
    var test = this.userService.getUserDetailsByProfileId();
    console.log('test:'+test);
  }
  cancel(e: any) {
        let vm = this;      
        vm.router.navigate(['/home']);  
    }
     forgotPassword(e: any) {
        let vm = this;        
        vm.router.navigate(['/forgotPassword']);  
    }
      save(val: any, valid: any){
         this.isPageLoad=false;    
    if (this.profileForm.valid) {
      this.isValidated=true;
        this.loginService.updateUser(this.profileForm.value)
            .subscribe(
                data => {      
                  if(data.result==1)
                    {
                     this.profileUpdateComplete = true;
                      
                    }else if(data.result==2){
                      this.profileUpdateComplete = true;
                      this.profileForm.reset();
                    }
                   
                },
                error => {
                    this.profileUpdateComplete=false;                   
                });
    }else{
      this.isValidated=false;
    }
  }

      }

