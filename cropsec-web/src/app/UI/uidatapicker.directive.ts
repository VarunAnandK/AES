import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
declare var $: any;

@Directive({
  selector: '[appUidatapicker]',
  providers: [NgModel]
})
export class UidatapickerDirective {
  @Output() UIOnChange: EventEmitter<any> = new EventEmitter();
  @Input() UIDefaultDate: boolean = false;
  constructor(el: ElementRef, private ngModel: NgModel) {
    var angularthis = this;
    $(document).ready(function () {
      if (angularthis.UIDefaultDate) {
        $('#' + el.nativeElement.id).kendoDatePicker({
          value: new Date()
        });
      }
      else {
        $('#' + el.nativeElement.id).kendoDatePicker({

        });
      }
      $(".hasDatepicker").blur(function (e) { $(this).datepicker("hide"); });
      $('#' + el.nativeElement.id).on('change', function () {
        angularthis.ngModel.update.emit(this.value);
        angularthis.UIOnChange.emit(this.value);
      });
      if (angularthis.UIDefaultDate) {
        angularthis.ngModel.update.emit(el.nativeElement.value);
      }
    });
  }
}
