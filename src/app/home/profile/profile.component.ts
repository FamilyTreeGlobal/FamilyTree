import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../../app.module';
import { UserService , LoginService  } from '../../../_services/index';
import {  FormGroup, Validators  , FormBuilder, FormControlName  , FormControl} from '@angular/forms';
import { ValidationService } from '../../validation.service';
import { ForgotpasswordComponent } from '../.././login/forgotpassword.component';
import { ControlMessages } from '../.././login/controlMessages';
import { USER_DATA } from '../../common/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [`../../login/signup.component.css`],
  encapsulation: ViewEncapsulation.None,
  providers:[UserService , LoginService ]

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
  private surname ='';
  private dob ='';
  private gender ='';
  private maritalstatus ='';
  private phone = '';
  

  constructor(private router: Router , userService: UserService ,loginService: LoginService ,private formBuilder: FormBuilder ) {
    this.userService = userService;
     this.profileForm = this.formBuilder.group({
            'fullname':['', [Validators.required]],
            'surname' :['', [Validators.required]],
            'gender'  :['', [Validators.required]],
            'dob'     :['', [Validators.required]],            
            // 'email'   :['', [Validators.required, ValidationService.emailValidator]],
            'phone':['', [Validators.required]],            
            'maritalstatus':['', [Validators.required]]
            
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
            
            if(data.status!=401){     
              let user=JSON.parse(data.result);
              vm.fullname      =user.fullname;
              vm.surname       =user.surname;
              vm.gender        = user.gender ;              
              vm.dob           =user.dob;
              vm.maritalstatus =user.maritalstatus;
              vm.phone         =user.phone;
            }else{
                //vm.validationSummaryMsg = data.msg;                                    
            }
        },
        error => {                                 
              vm.router.navigate([`/login`]);
        });
     
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
      console.log('entered into a save click event');
         this.isPageLoad=false;    
         console.log('form valid staus'+this.profileForm.valid);
        if (!this.profileForm.valid) {
                this.isValidated=true;
                console.log('user service');
                var token=USER_DATA.token;
                console.log('token'+token);
                this.userService.updateProfileUser(val,token)
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

