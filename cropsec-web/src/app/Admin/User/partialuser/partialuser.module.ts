import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartialuserRoutingModule } from './partialuser-routing.module';
import { PartialuserComponent } from './partialuser.component';
import { LabelModule } from 'src/app/Shared/label/label.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PartialuserRoutingModule,
    LabelModule
  ],
})
export class PartialuserModule { }
