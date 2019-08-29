import { Component, OnInit } from '@angular/core';
import { user } from 'src/Model/user';
import { CommonHelper } from 'src/Helper/CommonHelper';
import { Router } from '@angular/router';
import { ApiResponseModel } from 'src/Model/ApiResponseModel';
import { CommonService } from 'src/Service/Common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User: user;
  constructor(
    private router: Router,
    private helper: CommonHelper,
    private commonservice: CommonService,
  ) {
    this.User = new user();
  }

  ngOnInit() {
    this.helper.DeleteAllLocalStorage();
  }
  ValidateLogin() {
    debugger
    this.helper.ShowSpinner();
    this.commonservice.CommonPost(this.User, "Login").subscribe((res: ApiResponseModel) => {
      if (res.Type == "S") {
        this.helper.SucessToastr(res.Message, "Login");
        this.helper.SetLocalStorage(this.helper.StorageName, res.AdditionalData["User"]);
        //this.helper.SetLocalStorage("AESCompany", res.AdditionalData["Company"]);
        let resuser: any = res.AdditionalData["User"];
        if (this.helper.NullOrEmpty(resuser.landing_page)) {
          this.router.navigate(['Admin/Dashboard']);
        }
        else {
          this.helper.CurrentModule = resuser.landing_page.split("/")[1];
           this.router.navigate(['Admin/Dashboard']);
        }
      }
      else {
        this.helper.ErrorToastr(res.Message, "Login");
      }
    }, (error) => {
      this.helper.ErrorToastr(error, "Error");
      this.helper.HideSpinner();
    }, () => {
      this.helper.HideSpinner();
    });
  }
}
