import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoleListRoutingModule } from './user_role-list-routing.module';
import { UserRoleListComponent } from './user_role-list.component';
import { PartialUserRoleComponent } from '../partial-user_role/partial-user_role.component';
import { PartialUserRoleModule } from '../partial-user_role/partial-user_role.module';
import { LabelModule } from 'src/app/Shared/label/label.module';

@NgModule({
  declarations: [UserRoleListComponent,PartialUserRoleComponent],
  imports: [
    CommonModule,
    UserRoleListRoutingModule,
    LabelModule,
    PartialUserRoleModule
  ],
  entryComponents: [PartialUserRoleComponent]
})
export class UserRoleListModule { }
