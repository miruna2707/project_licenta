import {TicketService} from "../TicketService";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router"

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalDemo implements OnInit {

  personalInformation: any;

  submitted: boolean = false;

  constructor(public ticketService: TicketService, private router: Router) { }

  ngOnInit() {
    this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
  }

  nextPage() {
    if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
      this.ticketService.ticketInformation.personalInformation = this.personalInformation;
      this.router.navigate(['contact/seat']);

      return;
    }

    this.submitted = true;
  }
}
