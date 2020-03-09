import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppStartComponent } from './app-start/app-start.component';
import {MatSelectModule} from '@angular/material/select';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProjectComponent } from './project/project.component';
import { Page404ComponentComponent } from './page404-component/page404-component.component';
// import { CreateComponent } from './project/create/create.component';
// import { ViewComponent } from './project/view/view.component';
// import { SummaryComponent } from './project/view/summary/summary.component';

import { CalendarModule } from 'angular-calendar';
// import { SchedulerModule } from 'angular-calendar-scheduler';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AppStartComponent,
    DashboardComponent,
    // ProjectComponent,
    Page404ComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    RouterModule,
    CalendarModule,
    ScheduleModule,
        // SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' }),
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
