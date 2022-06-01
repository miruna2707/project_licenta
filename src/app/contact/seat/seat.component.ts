import {TicketService} from "../TicketService";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router"

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})

export class SeatDemo implements OnInit {

  constructor(public ticketService: TicketService, private router: Router) { }

  classes: any[]=[];

  class:any;

  vagons: any[]=[];

  seats: any[]=[];

  seatInformation: any;

  date13: Date | undefined;
  date14: any;
  val4: any;

  ngOnInit() {
    this.seatInformation = this.ticketService.ticketInformation.seatInformation;

    this.classes = [
      {name: 'Double', code: 'A', factor: 1},
      {name: 'Triple', code: 'B', factor: 2},
      {name: 'Family', code: 'C', factor: 3},
      {name: 'Apartament', code: 'D', factor: 4}
    ];
  }

  setVagons({event}: { event: any }) {
    if (this.seatInformation.class && event.value) {
      this.vagons = [];
      this.seats = [];
      for (let i = 1; i < 3 * event.value.factor; i++) {
        this.vagons.push({wagon: i + event.value.code, type: event.value.name, factor: event.value.factor});
      }
    }
  }

  setSeats({event}: { event: any }) {
    if (this.seatInformation.wagon && event.value) {
      this.seats = [];
      for (let i = 1; i < 10 * event.value.factor; i++) {
        this.seats.push({seat: i, type: event.value.type});
      }
    }
  }

  nextPage() {
    if (this.seatInformation.class && this.seatInformation.seat && this.seatInformation.wagon) {
      this.ticketService.ticketInformation.seatInformation = this.seatInformation;
      this.router.navigate(['steps/payment']);
    }
  }

  prevPage() {
    this.router.navigate(['contact/personal']);
  }
}

