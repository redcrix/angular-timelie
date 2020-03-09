import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  teamSize = [
    {value: '1', viewValue: '1-10'},
    {value: '2', viewValue: '10-50'},
    {value: '3', viewValue: '50-250'}
  ];

  HearAbout = [
    {value: '1', viewValue: 'Google'},
    {value: '2', viewValue: 'Email'},
    {value: '3', viewValue: 'Social Media'}
  ];


  constructor(public dialogRef: MatDialogRef<CreateComponent>) { }

  ngOnInit() {
  }


  actionFunction() {
  
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
