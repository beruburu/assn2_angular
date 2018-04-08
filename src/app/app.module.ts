import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    ReservationDetailComponent,
    ReservationComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
