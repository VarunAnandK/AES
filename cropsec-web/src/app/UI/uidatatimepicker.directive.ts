import { Directive, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
declare var $: any;

@Directive({
  selector: '[appUidatatimepicker]',
  providers: [NgModel]
})
export class UidatatimepickerDirective {
  @Input() UIDefaultDate: boolean = false;
  @Output() UIOnChange: EventEmitter<any> = new EventEmitter();
  constructor(el: ElementRef, private ngModel: NgModel) {
    var angularthis = this;
    $(document).ready(function () {

      if (angularthis.UIDefaultDate) {
        $('#' + el.nativeElement.id).kendoDateTimePicker({
          value: new Date()
        });
      }
      else {
        $('#' + el.nativeElement.id).kendoDateTimePicker({

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
