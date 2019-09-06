import { Component, OnInit } from '@angular/core';
import { user_role } from 'src/Model/user_role';
import { CommonHelper } from 'src/Helper/CommonHelper';
import { PartialUserRoleComponent } from '../partial-user_role/partial-user_role.component';
import { GridModel } from 'src/Helper/GridModel';
import { PopupService } from 'src/app/Shared/popup/popup.service';

@Component({
  selector: 'app-user_role-list',
  templateUrl: './user_role-list.component.html',
  styleUrls: ['./user_role-list.component.scss']
})
export class UserRoleListComponent implements OnInit {
  GridModel: Array<GridModel>;

  constructor(public dialog: PopupService,private helper : CommonHelper) {
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

  OpenPopup() {
    const ref = this.dialog.open(PartialUserRoleComponent, {
      data: new user_role(),
      Id: "userrolemodal",
      Title : "User Role",
    });
    ref.afterClosed.subscribe(result => {
      this.helper.GridRefresh("userrolegrid");
    });
  }
  Edit(event) {
    if (event.EventName == "Edit") {
      this.EditPage(event.data);
    }
  }

  Delete(id) {
    alert(id);
  }
  EditPage(model) {
    const ref = this.dialog.open(PartialUserRoleComponent, {
      data: model,
      Id: "userrolemodal",
      Title : "User Role",
    });
    ref.afterClosed.subscribe(result => {
      this.helper.GridRefresh("userrolegrid");
    });
  }

}
