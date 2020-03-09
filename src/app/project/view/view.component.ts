import { Component, OnInit } from '@angular/core';
import { CreateComponent } from '../create/create.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  displayedColumns: string[] = ['position','name', 'Progress', 'Budget', 'Spent', 'Remains',];

  dataSource= [
   {position: 1, name: 'Sample Project', Progress: 40, Budget: '$20,000',Spent:'$100', Remains:'$17,000' , 
  },

   {position: 1, name: 'timely Project', Progress: 10, Budget: '$15,000',Spent:'$1000', Remains:'$14,000' , 
},

 ];


  constructor( public matDialog: MatDialog,
    private route: Router,) { }

  ngOnInit() {
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(CreateComponent, dialogConfig);
  }

  openCal(){
    this.route.navigate(['/view']);
  }

  ViewProjects(){
    console.log('0');
    
    this.route.navigate(['/calendly']);
  }


}
