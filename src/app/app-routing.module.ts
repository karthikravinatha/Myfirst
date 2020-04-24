import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginComponent } from './module/login/login.component';

// import {FooterComponent} from './module/components/footer/footer.component';

//import {LoginComponent} from './module/components/login/login.component';

const routes: Routes = [
    // { path: '', redirectTo: '/login', pathMatch: 'full'},
    // { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent}
    
    // School-routing End...........
    // { path: '**', redirectTo: '' },
  
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
  })
  export class AppRoutingModule {
  }