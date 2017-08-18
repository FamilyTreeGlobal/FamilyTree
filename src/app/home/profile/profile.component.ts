import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../../app.module';
import { UserService  } from '../../../_services/index';
import {  FormGroup, Validators  , FormBuilder, FormControlName  , FormControl} from '@angular/forms';
import { ValidationService } from '../../validation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../../assets/css/style.css'],
  providers:[UserService]

})
export class ProfileComponent implements OnInit {
  private userService: UserService;
  constructor(private router: Router , userService: UserService) {
    this.userService = userService;
   }

  ngOnInit() {
  }
  public cancel(e: any) {
        let vm = this;      
        vm.router.navigate(['/home']);  
    }
    public forgotPassword(e: any) {
        let vm = this;        
        vm.router.navigate(['/forgotPassword']);  
    }
      save(val: any, valid: any){
        // here need to call the userservice...
      }
}
