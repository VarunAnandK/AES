import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialUserRoleRoutingModule } from './partial-user_role-routing.module';
import { LabelModule } from 'src/app/Shared/label/label.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PartialUserRoleRoutingModule,
    LabelModule
  ]
})
export class PartialUserRoleModule { }
