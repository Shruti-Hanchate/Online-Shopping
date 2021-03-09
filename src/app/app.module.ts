import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingComponent } from './shopping/shopping.component';
import { MenComponent } from './men/men.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AddcartComponent } from './addcart/addcart.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlldataComponent } from './alldata/alldata.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    MenComponent,
    SideBarComponent,
    WomenComponent,
    KidsComponent,
    FavoriteComponent,
    AddcartComponent,
    LogoutComponent,
    LoginComponent,
    RegisterComponent,
    AlldataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
