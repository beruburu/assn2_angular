import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  reservations: Reservation[];

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
  	this.reservationService
  		.getReservations()
  		.then(results => this.reservations = results.slice(0,4));
  }

}
