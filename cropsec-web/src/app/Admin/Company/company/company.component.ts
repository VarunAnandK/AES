import { Component, OnInit } from '@angular/core';
import { CommonHelper } from 'src/Helper/CommonHelper';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/Service/Common.service';
import { company } from 'src/Model/company';
import { ApiResponseModel } from 'src/Model/ApiResponseModel';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  CompanyData: company;
  CompanyForm: FormGroup;

  constructor(
    private helper: CommonHelper,
    public commonservice: CommonService,
    private formbuilder: FormBuilder,
    private route: Router,
    private _activeRoute: ActivatedRoute
  ) {
    this.CompanyData = new company();
  }

  ngOnInit() {
    debugger
    const routeParams = this._activeRoute.snapshot.params;
    this.GetCompanyById(routeParams.Id);
    this.CompanyForm = this.formbuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
       address: new FormControl('', Validators.compose([
        Validators.required
      ])),
       user_name: new FormControl('', Validators.compose([
        Validators.required
      ])),
       password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ])),

    });
  }
  CompanyValidationMessages = {
    'name': [
      { type: 'required', message: 'Name is required.' },
    ],
    'address': [
      { type: 'required', message: 'Address is required.' },
    ],
    'user_name': [
      { type: 'required', message: 'User Name is required.' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
    ],
    'email': [
      { type: 'email', message: 'Enter email in correct format eg: example@test.com' },
      { type: 'required', message: 'email is required.' },
    ],
  };

GetCompanyById(Id: number = 0) {
    this.helper.ShowSpinner();
    if (Id > 0) {
      this.commonservice.GetById(Id, "CompanyById").subscribe(
        res => {
          if (res) {
            this.CompanyData = res;
            this.CompanyForm.patchValue(res);
          }
          this.helper.HideSpinner();
        },
        error => {
          this.helper.HideSpinner();
        }
      );
    } else {
      this.helper.HideSpinner();
    }
  }
  CreateOrUpdate() {
     this.helper.ShowSpinner();
     this.commonservice.InsertOrUpdate(this.CompanyData, "Company").subscribe(
       (res: ApiResponseModel) => {
         if (res.Type == "S") {
          //  this.route.navigate([`${/Company/}${res.Id}`]);
          //  this.GetCompanyById(res.Id);
           this.helper.SucessToastr(res.Message, "Company");
         } else {
           this.helper.ErrorToastr(res.Message, "Company");
         }
         this.helper.HideSpinner();
       },
       error => {
         this.helper.ErrorToastr(error, "Error");
         this.helper.HideSpinner();
       },
       () => {
         this.helper.HideSpinner();
       }
     );
   }
   }
