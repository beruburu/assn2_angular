import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Reservation } from './reservation';

@Injectable()
export class ReservationService {
  private BASE_URL = "http://lmycweb.azurewebsites.net/api/reservations";
  private headers;

  constructor(private http: Http) { }

  getReservations(): Promise<Reservation[]> {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem("token").replace(new RegExp('\"', 'g'), ''));

  	return this.http
      .get(this.BASE_URL, { headers: this.headers })
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
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem("token").replace(new RegExp('\"', 'g'), ''));

    return this.http
      .post(this.BASE_URL, JSON.stringify(newReservation), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(reservation: Reservation): Promise<Reservation> {
  	const url = `${this.BASE_URL}/${reservation.reservationId}`;
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.headers.append('Authorization', 'Bearer ' + sessionStorage.getItem("token").replace(new RegExp('\"', 'g'), ''));

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
