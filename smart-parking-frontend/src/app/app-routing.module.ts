import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: 'home-page', component:  HomePageComponent },
  { path: '', redirectTo: '/home-page', pathMatch:'full'},
  { path: 'admin-home', component: AdminHomeComponent, canActivate:[AdminGuard]},
  { path: 'admin-login', component: AdminLoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
