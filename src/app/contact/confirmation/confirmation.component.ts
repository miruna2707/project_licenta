import {TicketService} from "../TicketService";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router"

@Component({
  selector: 'app-personal',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationDemo implements OnInit {

  ticketInformation: any;

  constructor(public ticketService: TicketService, private router: Router) { }

  ngOnInit() {
    this.ticketInformation = this.ticketService.ticketInformation;
    console.log(this.ticketService.ticketInformation.seatInformation)
  }

  complete() {
    this.ticketService.complete();
  }

  prevPage() {
    this.router.navigate(['contact/payment']);
  }
}
