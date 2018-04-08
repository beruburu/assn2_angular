import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Reservation } from './reservation';

@Injectable()
export class ReservationService {
  private BASE_URL = "http://localhost:63627/api/reservations";
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getReservations(): Promise<Reservation[]> {
  	return this.http
      .get(this.BASE_URL)
      .toPromise()
      .then(response => response.json() as Reservation[])
      .catch(this.handleError);
  }

  getReservationById(id: number): Promise<Reservation> {
  	return this.getReservations()
    .then(
      result => result.find(
        reservation => reservation.reservationId === id));
  }

  create(newReservation: Reservation): Promise<Reservation> {
    return this.http
      .post(this.BASE_URL, JSON.stringify(newReservation), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(reservation: Reservation): Promise<Reservation> {
  	const url = `${this.BASE_URL}/${reservation.reservationId}`;

  	return this.http
      .put(url, JSON.stringify(reservation), { headers: this.headers })
      .toPromise()
      .then(() => reservation)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
  	console.error('An error has occurred', error);
  	return Promise.reject(error.massage || error);
  }
}
