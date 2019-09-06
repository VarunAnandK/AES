import { Component, OnInit } from '@angular/core';
import { CommonHelper } from 'src/Helper/CommonHelper';
import { GridModel } from 'src/Helper/GridModel';
import { PopupService } from 'src/app/Shared/popup/popup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  GridModel: Array<GridModel>;

  constructor(
    public dialog: PopupService,
    private helper : CommonHelper,
    private router: Router
    ) {
    this.GridModel = new Array<GridModel>();
  }

    ngOnInit() {
      this.GridModel = [
        {
          field: "name",
          title: "Name"
        },
        {
          template:"<a class=\"Edit~  k-button k-grid-edit clickable\"><span class=\"k-icon k-i-edit\"></span></a>",
          width : 100
        },
      ];
    }
    Edit(event) {
      debugger
      if (event.EventName == "Edit") {
        this.Action(event.data.id);
      }
    }
    Action(model) {
      debugger
      this.router.navigate([`Admin/Company/${model}`]);
    }
  }
