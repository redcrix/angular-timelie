import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-app-start',
  templateUrl: './app-start.component.html',
  styleUrls: ['./app-start.component.scss']
})
export class AppStartComponent implements OnInit {
  complete1 = true;
  complete2 = false;
  teamSize = [
    {value: '1', viewValue: '1-10'},
    {value: '2', viewValue: '10-50'},
    {value: '3', viewValue: '50-250'}
  ];

  HearAbout = [
    {value: '1', viewValue: 'Google'},
    {value: '2', viewValue: 'Email'},
    {value: '3', viewValue: 'Social Media'}
  ]

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }

  NextStep(){
    this.complete1 = false;
    this.complete2 = true;
  }


  Create(){
    this.route.navigate(['/dashboard']);
  }


}
