import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  workEmail:boolean;

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
    this.workEmail = true;
  }

  TryFree(){

    this.workEmail = false;


  }

  Start(){
    this.route.navigate(['/app']);
  }

  onLogin(){
    this.route.navigate(['/login']);
  }

  onRegister(){
    this.route.navigate(['/register']);
  }


redirect(){
  // window.location.href = 'http://www.redirecturl.com';
  const url = 'http://www.redcrix.com';
  // let link = 'http:redcrix.com';
  window.open(url, "_blank");
}



}
