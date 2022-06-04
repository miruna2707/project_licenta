import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Subscription} from "rxjs";
import {TicketService} from "./TicketService";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  items: MenuItem[]=[];

  subscription: Subscription | undefined;

  constructor(public messageService: MessageService, public ticketService: TicketService) {}

  ngOnInit() {
    this.items = [{
      label: 'Personal',
      routerLink: 'personal'
    },
      {
        label: 'Seat',
        routerLink: 'seat'
      },
      {
        label: 'Payment',
        routerLink: 'payment'
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation'
      }
    ];

    this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) =>{
      this.messageService.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your reservation was processed.'});
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
