import { Component, OnInit } from '@angular/core';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReservationService]
})
export class AppComponent {
  title = "Reservations";
}
