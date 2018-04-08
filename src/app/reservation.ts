import { Boat } from './boat'
import { ApplicationUser } from './applicationUser'

export class Reservation {
	reservationId: number;
	userName: string;
	boatName: string;
	startTime: string;
	endTime: string;
	itinerary: string;
}
