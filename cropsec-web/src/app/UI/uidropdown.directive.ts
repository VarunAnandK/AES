import { Directive, ElementRef, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonHelper } from 'src/Helper/CommonHelper';
declare var $: any;

@Directive({
  selector: '[appUidropdown]'
})
export class UidropdownDirective implements OnInit {
  @Output() UIOnChange: EventEmitter<any> = new EventEmitter();
  @Input() UIData: any;
  @Input() UIURL: string = "";
  @Input() UITextField: string = "text";
  @Input() UIValueField: string = "value";


  constructor(private el: ElementRef, private ngModel: NgModel, private helper: CommonHelper) {
  }

  ngOnInit() {
    var angularthis = this;
    if (this.UIURL.length > 1) {
      $(document).ready(function () {
        $("#" + angularthis.el.nativeElement.id).kendoDropDownList({
          dataTextField: angularthis.UITextField,
          dataValueField: angularthis.UIValueField,
          change: onChange,
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
          angularthis.ngModel.update.emit(e.sender.dataItem()[angularthis.UIValueField]);
          angularthis.UIOnChange.emit(this.dataItem());
        }
      });
    }
    else {
      $(document).ready(function () {
        $("#" + angularthis.el.nativeElement.id).kendoDropDownList({
          dataTextField: angularthis.UITextField,
          dataValueField: angularthis.UIValueField,
          dataSource: angularthis.UIData,
          index: 0,
          change: onChange,
          filter: "contains",
        });
        function onChange(e) {
          debugger
          angularthis.ngModel.update.emit(e.sender.dataItem()[angularthis.UIValueField]);
          angularthis.UIOnChange.emit(this.dataItem());
        }
      });
    }
  }
}
