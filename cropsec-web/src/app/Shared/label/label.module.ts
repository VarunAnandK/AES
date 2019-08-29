import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../label/label.component';
import { UidatatimepickerDirective } from 'src/app/UI/uidatatimepicker.directive';
import { UidatapickerDirective } from 'src/app/UI/uidatapicker.directive';
import { FormsModule } from '@angular/forms';
import { UidropdownDirective } from 'src/app/UI/uidropdown.directive';
import { UidropdownmultipleDirective } from 'src/app/UI/uidropdownmultiple.directive';
import { UinumerictextboxDirective } from 'src/app/UI/uinumerictextbox.directive';
import { UigridDirective } from 'src/app/UI/uigrid.directive';



@NgModule({
  declarations: [
    LabelComponent,
    UidatatimepickerDirective,
    UidatapickerDirective,
    UidropdownDirective,
    UidropdownmultipleDirective,
    UinumerictextboxDirective,
    UigridDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UidatatimepickerDirective,
    UidatapickerDirective,
    UidropdownDirective,
    FormsModule,
    UidropdownmultipleDirective,
    UinumerictextboxDirective,
    UigridDirective
  ]
})
export class LabelModule { }
