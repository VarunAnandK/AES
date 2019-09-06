import { Component, OnInit, Input } from '@angular/core';
import { user } from 'src/Model/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonHelper } from 'src/Helper/CommonHelper';
import { CommonService } from 'src/Service/Common.service';
import { ApiResponseModel } from 'src/Model/ApiResponseModel';
import { PopupConfig } from 'src/app/Shared/popup/popup-config';
import { PopupRef } from 'src/app/Shared/popup/popup-ref';

@Component({
  selector: 'app-partialuser',
  templateUrl: './partialuser.component.html',
  styleUrls: ['./partialuser.component.css']
})
export class PartialuserComponent implements OnInit {
  UserData : user;
  UserForm: FormGroup;
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
    this.UserData = this.config.data;
    this.UserForm = this.formbuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      user_role_id: new FormControl('', Validators.compose([
        Validators.required
      ])),

    });
  }
  UserValidationMessages = {
    'name': [
      { type: 'required', message: 'name is required.' },
    ],
    'email': [
      { type: 'email', message: 'Enter email in correct format eg: example@test.com' },
      { type: 'required', message: 'email is required.' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
    ],
    'user_role_id': [
      { type: 'required', message: 'Password is required.' },
    ],
  };
  CreateOrUpdate() {
    this.helper.ShowSpinner();
    this.commonservice.InsertOrUpdate(this.UserData, "User").subscribe(
      (res: ApiResponseModel) => {
        if (res.Type == "S") {
          debugger
          this.helper.SucessToastr(res.Message, "User");
          this.popupref.close();
        } else {
          this.helper.ErrorToastr(res.Message, "User");
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

}
