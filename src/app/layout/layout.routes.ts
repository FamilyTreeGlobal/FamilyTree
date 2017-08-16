import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../home/profile/profile.component';
import { ChatComponent } from '../home/chat/chat.component';
import { InvitationsComponent} from '../home/invitations/invitations.component';
import { RequestsComponent } from '../home/requests/requests.component';
import { FamilynewsComponent} from '../home/familynews/familynews.component';

const routes: Routes = [
  {
    path: 'app'    , component: LayoutComponent ,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'invitations', component: InvitationsComponent },
      { path: 'requests', component: RequestsComponent },
      { path: 'familynews', component: FamilynewsComponent }
      
    ]
  }
];

export const ROUTES = RouterModule.forChild(routes);
