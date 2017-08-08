import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HOME_ROUTES } from './home.routes';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , ReactiveFormsModule
    , RouterModule
    , HOME_ROUTES    
    ,LayoutModule
    
  ],
  declarations: [
     HomeComponent
  ]
})
export class HomeModule { }