import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timely';

  constructor(    
    private route: Router,

    ){
    

  }






}


