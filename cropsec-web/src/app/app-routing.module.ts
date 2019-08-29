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
    loadChildren: './user/list/list.module#ListModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
