import { Component, OnInit } from '@angular/core';
import { EventSettingsModel,DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calendly',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  templateUrl: './calendly.component.html',
  styleUrls: ['./calendly.component.scss']
})
export class CalendlyComponent implements OnInit {

  public data: object [] = [{
    Id: 2,
    EventName: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    IsAllDay: false
  }];
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = {
    dataSource: this.data,
    fields: {
      id: 'Id',
      subject: { name: 'EventName' },
      isAllDay: { name: 'IsAllDay' },
      startTime: { name: 'StartTime' },
      endTime: { name: 'EndTime' },
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
