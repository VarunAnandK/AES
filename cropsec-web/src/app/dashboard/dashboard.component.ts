import { Component, OnInit } from '@angular/core';
import { GridModel } from 'src/Helper/GridModel';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  DateTimePicker: Date;
  DatePicker: Date;
  DropdownID: string;
  MultiDropdownID: string;
  numberic: number;
  GridModel: Array<GridModel>;
  constructor() {
    this.GridModel = new Array<GridModel>();
  }
  ngOnInit() {
    this.GridModel = [
      {
        template: "<a class=\"Edit~ btn btn-primary clickable\"><span class=\"fas fa-lock\"></span></a>",
        width: 100,
      },
      {
        field: "name",
        title: "Name"
      },
      {
        field: "email",
        title: "Email"
      },
      {
        field: "password",
        title: "Password"
      },
    ]
  }
  Validate() {
    console.log("DateTimePicker", this.DateTimePicker);
    console.log("DatePicker", this.DatePicker);
    console.log("DropdownID", this.DropdownID);
    console.log("MultiDropdownID", this.MultiDropdownID);
  }
  Date(event) {
    console.log("change event", event);
  }
  DDChange(event) {
    console.log("DD event", event);
  }
}
