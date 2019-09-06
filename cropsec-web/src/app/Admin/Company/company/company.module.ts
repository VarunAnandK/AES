import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from '../company/company.component';
import { LabelModule } from 'src/app/Shared/label/label.module';

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    LabelModule
  ]
})
export class CompanyModule { }
