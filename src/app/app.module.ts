import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './component/sheet/sheet.component';
import { HeaderComponent } from './component/header/header.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { SigninComponent } from './component/signin/signin.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    HeaderComponent,
    HomePageComponent,
    SigninComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
