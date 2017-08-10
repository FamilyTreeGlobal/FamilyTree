import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProfileComponent } from '../profile/profile.component';
import { HomeRoutingModule } from './home.routes';
import {LayoutModule} from '../layout/layout.module';



@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , ReactiveFormsModule
    , RouterModule
    , HomeRoutingModule    
    ,LayoutModule
    
  ],
  declarations: [
     HomeComponent,
     ProfileComponent
  ]
})
export class HomeModule { }