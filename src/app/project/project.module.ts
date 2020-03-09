import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule} from '@angular/material';
import { ProjectRoutingModule } from './project-routing.module';
import {MatTableModule} from '@angular/material/table';
import { ProjectComponent } from './project.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import  {MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { CalendlyComponent } from './calendly/calendly.component';

import { MatDialogRef} from '@angular/material/dialog';
@NgModule({
  declarations: [
    ProjectComponent,
    CreateComponent,
    ViewComponent,
    CalendlyComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressBarModule,
    ScheduleModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
 
 ],
})
export class ProjectModule { }
