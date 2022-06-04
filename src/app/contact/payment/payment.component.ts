import {TicketService} from "../TicketService";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router"

@Component({
  selector: 'app-personal',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentDemo implements OnInit {

  paymentInformation: any;

  constructor(public ticketService: TicketService, private router: Router) { }

  ngOnInit() {
    this.paymentInformation = this.ticketService.ticketInformation.paymentInformation;
  }

  nextPage() {
    if (this.paymentInformation.cardholderName && this.paymentInformation.cardholderNumber && this.paymentInformation.date && this.paymentInformation.cvv) {
      this.ticketService.ticketInformation.paymentInformation = this.paymentInformation;
      this.router.navigate(['contact/confirmation']);
    }
  }

  prevPage() {
    this.router.navigate(['contact/seat']);
  }
}
