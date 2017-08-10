import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
const routes: Routes = [
  {
    path: ''    , component: LayoutComponent ,
    children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
    
      
    ]
  }
];

export const ROUTES = RouterModule.forChild(routes);
