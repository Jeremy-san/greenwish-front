import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { SigninComponent } from './component/signin/signin.component';


const routes: Routes = [
  {
    path: 'home-page', component: HomePageComponent
  },
  {
    path: 'admin/dashboard', component: AdminDashboardComponent
  },
  {
    path: 'login', component: SigninComponent
  },
  {
    path: '', redirectTo: 'home-page', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
