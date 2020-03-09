import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AppStartComponent } from './app-start/app-start.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { Page404ComponentComponent } from './page404-component/page404-component.component';


const routes: Routes = [

  // { path: '**', component: Page404ComponentComponent },




  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'app',
    component: AppStartComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  { path: 'project', 
  loadChildren: () => import(`./project/project.module`).then(m => m.ProjectModule) },



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
