import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { AuthGuard } from './auth/guard';
import { ViewNatjecajComponent } from './natjecaj/view-natjecaj/view-natjecaj.component';
import { CreateNatjecajComponent } from './natjecaj/create-natjecaj/create-natjecaj.component';
import { ListMobilnostsComponent } from './mobilnost/list-mobilnosts/list-mobilnosts.component';
import { CreateMobilnostComponent } from './mobilnost/create-mobilnost/create-mobilnost.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create-natjecaj', component: CreateNatjecajComponent},
  {path : 'view-natjecaj/:id', component: ViewNatjecajComponent },
  { path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'create-mobilnost', component: CreateMobilnostComponent},
  { path: 'list-mobilnosts', component: ListMobilnostsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }