import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './layout.routes';
import { LayoutComponent } from './layout.component';

import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
  imports: [CommonModule, ROUTES, FormsModule, ReactiveFormsModule],
  declarations: [LayoutComponent,HomeComponent,ProfileComponent],
  providers: []
})
export class LayoutModule {
}
