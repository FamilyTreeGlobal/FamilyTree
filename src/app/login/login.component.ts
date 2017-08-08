import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';
import { Router } from '@angular/router';
import { LoginService  } from '../../_services/index';
import { USER_DATA } from '../common/user';

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

  constructor(private router: Router, private formBuilder: FormBuilder,private loginService:LoginService) {
    this.loginForm = this.formBuilder.group({
            'username': ['', [Validators.required, ValidationService.emailValidator]],
            'password': ['', [Validators.required, ValidationService.passwordValidator]]
        });
   }

  ngOnInit() { 
        let body = document.getElementsByTagName('body')[0];
        body.classList.add("body-background-img");
        body.classList.remove("body-background-color");
  }
  
   
    private onLogin(val: any, valid: any) {
        let vm = this;
        this.router.navigate(['home']);
        // this.loginService.authenticate(val)
        //   .subscribe(
        //       data => {         
        //           console.log('data'+data)      ;       
        //           USER_DATA.token=data.token;                               
        //           this.router.navigate(['/home']);
        //       },
        //       error => {
        //             console.log(val.username+ val.password);        
        //             vm.validationSummaryMsg = "Please enter email or phone number";                    
        //             vm.router.navigate([`/login`]);
        //       });
    }
    
    public forgotPassword(e: any) {
        let vm = this;        
        vm.router.navigate(['/forgotPassword']);  
    }

    public register(e: any) {
        let vm = this;        
        vm.router.navigate(['/createUser']);        		
    }  
}
