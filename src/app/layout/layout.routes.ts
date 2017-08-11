import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { ChatComponent } from '../chat/chat.component';
import { InvitationsComponent} from '../invitations/invitations.component';
const routes: Routes = [
  {
    path: 'app'    , component: LayoutComponent ,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'invitations', component: InvitationsComponent }
      
    ]
  }
];

export const ROUTES = RouterModule.forChild(routes);
