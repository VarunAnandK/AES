import { Directive, ElementRef, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonService } from 'src/Service/Common.service';
import { CommonHelper } from 'src/Helper/CommonHelper';
declare var $: any;

@Directive({
  selector: '[appUidropdownmultiple]'
})
export class UidropdownmultipleDirective implements OnInit {
  @Output() UIOnChange: EventEmitter<any> = new EventEmitter();
  @Input() UIData: any;
  @Input() UIURL: string = "";
  @Input() UITextField: string = "text";
  @Input() UIValueField: string = "value";


  constructor(private el: ElementRef, private ngModel: NgModel, private helper: CommonHelper) {
  }

  async ngOnInit() {
    var angularthis = this;
    if (this.UIURL.length > 1) {
      $(document).ready(function () {
        $("#" + angularthis.el.nativeElement.id).kendoMultiSelect({
          dataTextField: angularthis.UITextField,
          dataValueField: angularthis.UIValueField,
          change: onChange,
          autoClose: false,
          filter: "contains",
          dataSource: {
            transport: {
              read: {
                dataType: "json",
                type: 'GET',
                url: angularthis.helper.ApiURL + "/" + angularthis.UIURL,
                beforeSend: function (req) {
                  req.setRequestHeader('Authorization', angularthis.helper.GetCurentUser().api_token);
                },
              }
            }
          }
        });
        function onChange(e) {
          if (e.sender.dataItem() == undefined) {
            angularthis.ngModel.update.emit("");
            angularthis.UIOnChange.emit([]);
          }
          else {
            if (angularthis.ngModel.value) {
              angularthis.ngModel.update.emit(angularthis.ngModel.value + "," + e.sender.dataItem()[angularthis.UIValueField]);
            }
            else {
              angularthis.ngModel.update.emit(e.sender.dataItem()[angularthis.UIValueField]);
            }
            angularthis.UIOnChange.emit(this.dataItem());
          }
        }
      });
    }
    else {
      $(document).ready(function () {
        $("#" + angularthis.el.nativeElement.id).kendoMultiSelect({
          dataTextField: angularthis.UITextField,
          dataValueField: angularthis.UIValueField,
          dataSource: angularthis.UIData,
          index: 0,
          change: onChange,
          autoClose: false,
          filter: "contains",
        });
        function onChange(e) {
          if (e.sender.dataItem() == undefined) {
            angularthis.ngModel.update.emit("");
            angularthis.UIOnChange.emit([]);
          }
          else {
            if (angularthis.ngModel.value) {
              angularthis.ngModel.update.emit(angularthis.ngModel.value + "," + e.sender.dataItem()[angularthis.UIValueField]);
            }
            else {
              angularthis.ngModel.update.emit(e.sender.dataItem()[angularthis.UIValueField]);
            }
          }
        }
      });
    }
  }
}
