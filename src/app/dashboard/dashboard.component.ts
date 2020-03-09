import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }


  onLogin(){
    this.route.navigate(['/login']);
  }

  onRegister(){
    this.route.navigate(['/register']);
  }

  Project(){
    this.route.navigate(['/project']);
  }


}
