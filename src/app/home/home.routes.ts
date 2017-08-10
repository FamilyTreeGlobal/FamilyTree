import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    // { path: '', component: HomeComponent ,
    //     children: [        
    //         { path: 'home', component : HomeComponent}]}  
    
    //{ path: '', loadChildren: './layout/layout.module#LayoutModule' }
];


//export const HOME_ROUTES = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {

}


