import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { GridModel } from "src/Helper/GridModel";
import { PartialuserComponent } from "../partialuser/partialuser.component";
import { user } from "src/Model/user";
import { PopupService } from "src/app/Shared/popup/popup.service";
import { UigridDirective } from 'src/app/UI/uigrid.directive';
import { CommonHelper } from 'src/Helper/CommonHelper';
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  GridModel: Array<GridModel>;
  constructor(public dialog: PopupService,private helper : CommonHelper) {
    this.GridModel = new Array<GridModel>();
  }

  ngOnInit() {
    this.GridModel = [
      {
        field: "user_role.name",
        title: "User Role"
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
        template:"<a class=\"Edit~  k-button k-grid-edit clickable\"><span class=\"k-icon k-i-edit\"></span></a>",
        width : 100
      },
    ];
  }

  OpenPopup() {
    const ref = this.dialog.open(PartialuserComponent, {
      data: new user(),
      Id: "usermodal",
      Title : "User",
    });
    ref.afterClosed.subscribe(result => {
      this.helper.GridRefresh("usergrid");
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
    const ref = this.dialog.open(PartialuserComponent, {
      data: model,
      Id: "usermodal",
      Title : "User",
    });
    ref.afterClosed.subscribe(result => {
      this.helper.GridRefresh("usergrid");
    });
  }
}
