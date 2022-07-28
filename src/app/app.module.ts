import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenInterceptor } from './auth/token-interceptor';
import { NatjecajTileComponent } from './shared/natjecaj-tile/natjecaj-tile.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { MobilnostSideBarComponent } from './shared/subreddit-side-bar/mobilnost-side-bar.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateMobilnostComponent } from './mobilnost/create-mobilnost/create-mobilnost.component';
import { CreateNatjecajComponent } from './natjecaj/create-natjecaj/create-natjecaj.component';
import { ViewNatjecajComponent } from './natjecaj/view-natjecaj/view-natjecaj.component';
import { ListMobilnostsComponent } from './mobilnost/list-mobilnosts/list-mobilnosts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NatjecajTileComponent,
    SideBarComponent,
    MobilnostSideBarComponent,
    CreateMobilnostComponent,
    CreateNatjecajComponent,
    ListMobilnostsComponent,
    CreateMobilnostComponent,
    CreateNatjecajComponent,
    ViewNatjecajComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    NgbModule
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