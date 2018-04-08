import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'reservation-component',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  selected: Reservation;
  reservations: Reservation[];
  newReservation: Reservation = new Reservation();

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) { }

  getReservations(): void {
  	this.reservationService
      .getReservations()
      .then(reservations => this.reservations = reservations);
  }

  onSelect(reservation: Reservation): void {
  	this.selected = reservation;
  }

  add(newReservation: Reservation): void {
    newReservation.userName = newReservation.userName;//.trim();
    newReservation.boatName = newReservation.boatName;//.trim();
    newReservation.startTime = newReservation.startTime;//.trim();
    newReservation.endTime = newReservation.endTime;//.trim();
    newReservation.itinerary = newReservation.itinerary;//.trim();

    if(!newReservation) {
      return;
    }

    this.reservationService.create(newReservation)
      .then(newReservation => {
        this.selected = null;
        this.router.navigate(['./dashboard']);
      });
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selected.reservationId]);
  }

  ngOnInit(): void {
  	this.getReservations();
  }
}
