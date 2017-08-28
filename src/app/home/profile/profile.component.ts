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
  private fullname='';

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
    console.log('initializing the profile page');
    var token=USER_DATA.token;
    console.log('token:'+token);
    let vm = this;
    this.userService.getUserDetailsByProfileId()
    .subscribe(
        data => {         
            console.log('data'+data.status);  
            if(data.status!=401){     
              console.log(data.result);
              let user=JSON.parse(data.result);
              //console.log(user.fullname);
              vm.fullname=user.fullname;
                  //this.router.navigate(['/app/home']);
            }else{
                //vm.validationSummaryMsg = data.msg;                    
                //vm.router.navigate([`/login`]);
            }
        },
        error => {
              //console.log(val.username+ val.password);        
              //vm.validationSummaryMsg = "Please enter valid email/phone and password";                    
              vm.router.navigate([`/login`]);
        });
     
  }

private onProfile(val: any, valid: any) {
        console.log('on Profile save click page...');
        this.isPageLoad = false;
       if (this.profileForm.valid) {
        
        let vm = this;
        this.loginService.authenticate(val)
          .subscribe(
              data => {         
                  console.log('data'+data.status);  
                  if(data.status!=401){     
                         USER_DATA.token=data.token;       
                         console.log('data token :'+USER_DATA.token);
                          this.loginService.updateUser(this.profileForm.value);                       ;
                        this.router.navigate(['/app/home']);
                  }else{
                                
                      vm.router.navigate([`/profile`]);
                  }
              },
              error => {                
                    vm.router.navigate([`/profile`]);
              });
       }
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

