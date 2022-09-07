import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenInterceptor } from './auth/token-interceptor';
import { MobilnostTileComponent } from './shared/natjecaj-tile/mobilnost-tile.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadFilesComponent } from './UploadFiles/upload-files/upload-files.component';
import { ChangepasswordComponent } from './auth/changepassword/changepassword.component';
import { LoginComponent } from './auth/login/login.component';
import { MojiNatjecajiComponent } from './auth/moji-natjecaji/moji-natjecaji.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { ListNatjecajsComponent } from './mobilnost/list-mobilnosts/list-natjecajs.component';
import { ViewMobilnostComponent } from './natjecaj/view-natjecaj/view-mobilnost.component';
import { CreateNatjecajComponent } from './mobilnost/create-mobilnost/create-natjecaj.component';
import { CreateMobilnostComponent } from './natjecaj/create-natjecaj/create-mobilnost.component';
import { NatjecajSideBarComponent } from './shared/subreddit-side-bar/natjecaj-side-bar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ViewNatjecajComponent } from './mobilnost/view-natjecaj/view-natjecaj.component';
import { UploadUgovorComponent } from './ugovori/upload-ugovor/upload-ugovor.component';
import { UgovoriComponent } from './shared/ugovori/ugovori.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MobilnostTileComponent,
    SideBarComponent,
    NatjecajSideBarComponent,
    CreateNatjecajComponent,
    CreateMobilnostComponent,
    ViewMobilnostComponent,
    ListNatjecajsComponent,
    UploadFilesComponent,
    SignUpComponent,
    LoginComponent,
    UserProfileComponent,
    ChangepasswordComponent,
    MojiNatjecajiComponent,
    ViewNatjecajComponent,
    UploadUgovorComponent,
    UgovoriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [   {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class AppModule { }