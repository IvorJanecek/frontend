import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { AuthGuard } from './auth/guard';
import { ViewMobilnostComponent } from './natjecaj/view-natjecaj/view-mobilnost.component';
import { CreateMobilnostComponent } from './natjecaj/create-natjecaj/create-mobilnost.component';
import { ListNatjecajsComponent } from './mobilnost/list-mobilnosts/list-natjecajs.component';
import {  CreateNatjecajComponent } from './mobilnost/create-mobilnost/create-natjecaj.component';
import { ChangepasswordComponent } from './auth/changepassword/changepassword.component';
import { MojiNatjecajiComponent } from './auth/moji-natjecaji/moji-natjecaji.component';
import { ViewNatjecajComponent } from './mobilnost/view-natjecaj/view-natjecaj.component';
import { UgovoriComponent } from './shared/ugovori/ugovori.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component:ListUserComponent},
  { path: 'details/:id', component:UserDetailsComponent},
  { path: 'create-natjecaj', component: CreateNatjecajComponent,canActivate: [AuthGuard]},
  { path : 'view-mobilnost/:id', component: ViewMobilnostComponent },
  { path: 'view-natjecaj/:id', component:ViewNatjecajComponent},
  { path: 'ugovori', component:UgovoriComponent},
  { path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'promjeni-sifru/:name', component: ChangepasswordComponent, canActivate: [AuthGuard] },
  { path: 'create-mobilnost', component: CreateMobilnostComponent, canActivate: [AuthGuard]},
  { path: 'list-natjecajs', component: ListNatjecajsComponent },
  { path: 'moji-natjecaji/:name', component: MojiNatjecajiComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }