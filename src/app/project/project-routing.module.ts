import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent } from './project.component'

import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { CalendlyComponent } from './calendly/calendly.component';

const routes: Routes = [
  {
    path: '', component: ProjectComponent, children: [
    
    

      // {
      //   path: '', redirectTo: 'view', pathMatch: 'full'
      // },

      {
        path: 'create', component: CreateComponent
      },
      { path: 'view', component: ViewComponent },
      {
        path: 'calendly', component: CalendlyComponent
      },
   
    
    ]
  },







];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
