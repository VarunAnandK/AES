import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from 'src/Helper/AuthGuard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
  },
  { path: 'Login', component: LoginComponent },
  {
    path: 'Admin/Dashboard',
    component: MainComponent,
    canActivate: [AuthGuard],
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'Admin/UserList',
    component: MainComponent,
    canActivate: [AuthGuard],
    loadChildren: './Admin/User/user-list/user-list.module#UserListModule'
  },
  {
    path: 'Admin/UserRoleList',
    component: MainComponent,
    canActivate: [AuthGuard],
    loadChildren: './Admin/UserRole/user_role-list/user_role-list.module#UserRoleListModule'
  },
  {
    path: 'Admin/CompanyList',
    component: MainComponent,
    canActivate: [AuthGuard],
    loadChildren: './Admin/Company/company-list/company-list.module#CompanyListModule'
  },

  {
    path: 'Admin/Company/:Id',
    component: MainComponent,
    canActivate: [AuthGuard],
    loadChildren: './Admin/Company/company/company.module#CompanyModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
