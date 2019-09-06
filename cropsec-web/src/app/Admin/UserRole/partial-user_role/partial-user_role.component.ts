import { Component, OnInit } from '@angular/core';
import { user_role } from 'src/Model/user_role';
import { CommonHelper } from 'src/Helper/CommonHelper';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/Service/Common.service';
import { PopupConfig } from 'src/app/Shared/popup/popup-config';
import { PopupRef } from 'src/app/Shared/popup/popup-ref';
import { ApiResponseModel } from 'src/Model/ApiResponseModel';


@Component({
  selector: 'app-partial-user_role',
  templateUrl: './partial-user_role.component.html',
  styleUrls: ['./partial-user_role.component.scss']
})
export class PartialUserRoleComponent implements OnInit {

  UserRoleData : user_role;
  UserRoleForm: FormGroup;

  constructor(
    private helper: CommonHelper,
    public commonservice: CommonService,
    private formbuilder: FormBuilder,
    private config: PopupConfig,
    private popupref : PopupRef
  ) {
  }
  ngOnInit() {
    debugger
    this.UserRoleData = this.config.data;
    this.UserRoleForm = this.formbuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),

    });
  }
  UserRoleValidationMessages = {
    'name': [
      { type: 'required', message: 'Name is required.' },
    ],
  };
  CreateOrUpdate() {
    this.helper.ShowSpinner();
    this.commonservice.InsertOrUpdate(this.UserRoleData, "UserRole").subscribe(
      (res: ApiResponseModel) => {
        if (res.Type == "S") {
          debugger
          this.helper.SucessToastr(res.Message, "User Role");
          this.popupref.close();
        } else {
          this.helper.ErrorToastr(res.Message, "User Role");
        }
      },
      error => {
        this.helper.HideSpinner();
        this.helper.ErrorToastr(error, "Error");
      },
      () => {
        this.helper.HideSpinner();
      }
    );
  }
  Delete() {
    // this.helper.ShowSpinner();
    // this.commonservice.Delete(this.UserRoleData.id, "UserRoleDelete").subscribe(
    //   (res: ApiResponseModel) => {
    //     if (res.Type == "S") {
    //       this.helper.SucessToastr(res.Message, "User Role");

    //     } else {
    //       this.helper.ErrorToastr(res.Message, "User Role");
    //     }
    //   },
    //   error => {
    //     this.helper.HideSpinner();
    //     this.helper.ErrorToastr(error, "Error");
    //   },
    //   () => {
    //     this.helper.HideSpinner();
    //   }
    // );
  }


}
