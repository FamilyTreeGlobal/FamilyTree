import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { RequestsComponent } from './requests/requests.component';
import { InvitationsComponent} from './invitations/invitations.component';
import { FamilynewsComponent} from './familynews/familynews.component';
import { HomeRoutingModule } from './home.routes';
import { LayoutModule} from '../layout/layout.module';



@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , ReactiveFormsModule
    , RouterModule
    , HomeRoutingModule    
    , LayoutModule
  ],
  declarations: [
    // HomeComponent,
     //ProfileComponent
  ]
})
export class HomeModule { }