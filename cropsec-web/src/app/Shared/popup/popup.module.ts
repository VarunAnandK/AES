import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { PopupDirective } from './popup.directive';



@NgModule({
  imports: [CommonModule],
  declarations: [PopupComponent, PopupDirective],
  entryComponents: [PopupComponent],
})
export class PopupModule { }
