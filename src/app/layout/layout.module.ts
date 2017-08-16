import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './layout.routes';
import { LayoutComponent } from './layout.component';

import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../home/profile/profile.component';
import { ChatComponent } from '../home/chat/chat.component';
import { InvitationsComponent} from '../home/invitations/invitations.component';
import { FamilynewsComponent} from '../home/familynews/familynews.component';
import { RequestsComponent } from '../home/requests/requests.component';

@NgModule({
  imports: [CommonModule, ROUTES, FormsModule, ReactiveFormsModule],
  declarations: [LayoutComponent,HomeComponent,ProfileComponent,ChatComponent,
    InvitationsComponent,RequestsComponent,FamilynewsComponent],
  providers: []
})
export class LayoutModule {
}
