import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListRoutingModule } from './company-list-routing.module';
import { CompanyListComponent } from './company-list.component';
import { LabelModule } from 'src/app/Shared/label/label.module';

@NgModule({
  declarations: [CompanyListComponent],
  imports: [
    CommonModule,
    CompanyListRoutingModule,
    LabelModule
  ],
})
export class CompanyListModule { }
