import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {

  constructor(
  	private reservationService: ReservationService,
  	private route: ActivatedRoute,
  	private location: Location
  ) { }

  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
  		let id = +params['id'];
  		this.reservationService.getReservationById(id).then(result => this.reservation = result);
  	});
  }

  save(): void {
    this.reservationService.update(this.reservation).then(() => this.goBack());
  }

  goBack(): void {
  	this.location.back();
  }

  @Input()
  reservation: Reservation;
}
