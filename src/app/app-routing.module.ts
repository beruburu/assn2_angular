import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: ReservationDetailComponent },
	{ path: 'reservations', component: ReservationComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }