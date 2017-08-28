import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {  FormGroup, Validators  , FormBuilder, FormControlName  , FormControl} from '@angular/forms';
import { ValidationService } from '../validation.service';
import { Router } from '@angular/router';
import { LoginService  } from '../../_services/index';
import { USER_DATA } from '../common/user';
import { AppModule } from '../app.module';
import {HomeComponent} from '../home/home.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  private message: string;
  private validationSummaryMsg:string;
 private isPageLoad: boolean = true;

  constructor(private router: Router, private formBuilder: FormBuilder,private loginService:LoginService) {
    this.loginForm = this.formBuilder.group({
            'username': ['', [Validators.required, ValidationService.emailValidator]],
            'password': ['', [Validators.required, ValidationService.passwordValidator]]
        });
   }

  ngOnInit() { 
      //this.isPageLoad=true;
        let body = document.getElementsByTagName('body')[0];
        body.classList.add("body-background-img");
        body.classList.remove("body-background-color");
  }
  
   
    private onLogin(val: any, valid: any) {
        this.isPageLoad = false;
       if (this.loginForm.valid) {
        
        let vm = this;
       //this.router.navigate(['/app/home']);
        this.loginService.authenticate(val)
          .subscribe(
              data => {         
                  console.log('data'+data.status);  
                  if(data.status!=401){     
                         USER_DATA.token=data.token;       
                         console.log(USER_DATA.token)                        ;
                        this.router.navigate(['/app/home']);
                  }else{
                      vm.validationSummaryMsg = data.msg;                    
                      vm.router.navigate([`/login`]);
                  }
              },
              error => {
                    //console.log(val.username+ val.password);        
                    vm.validationSummaryMsg = "Please enter valid email/phone and password";                    
                    vm.router.navigate([`/login`]);
              });
       }
    }
    
    public forgotPassword(e: any) {
        let vm = this;        
        vm.router.navigate(['/forgotPassword']);  
    }

    public signup(e: any) {
        let vm = this;        
        vm.router.navigate(['/signup']);  
    }

    // public register(e: any) {
    //     let vm = this;        
    //     vm.router.navigate(['/createUser']);        		
    // }  
}
