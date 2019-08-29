import { Directive, ElementRef, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
declare var $: any;

@Directive({
  selector: '[appUinumerictextbox]'
})
export class UinumerictextboxDirective {
  @Output() UIOnChange: EventEmitter<any> = new EventEmitter();
  @Input() UIIsDecimal: boolean = false;

  constructor(private el: ElementRef, private ngModel: NgModel) {
    var angularthis = this;
    $(document).ready(function () {
      if (angularthis.UIIsDecimal) {
        $("#" + el.nativeElement.id).kendoNumericTextBox({
          decimals: 2,
          min: 0,
          change: onchange
        });
      }
      else {
        $("#" + el.nativeElement.id).kendoNumericTextBox({
          min: 0,
        });
      }
      function onchange(e) {
        if (e.sender.value() == null) {
          angularthis.ngModel.update.emit(0);
          angularthis.UIOnChange.emit(0);
        }
        else {
          angularthis.ngModel.update.emit(e.sender.value());
          angularthis.UIOnChange.emit(e.sender.value());
        }
      }
    });
  }
}
