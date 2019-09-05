import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { LabelModule } from 'src/app/Shared/label/label.module';
import { PartialuserModule } from '../partialuser/partialuser.module';
import { PartialuserComponent } from '../partialuser/partialuser.component';


@NgModule({
  declarations: [UserListComponent,PartialuserComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    LabelModule,
    PartialuserModule
  ],
  entryComponents: [
    PartialuserComponent
  ]
})
export class UserListModule { }
