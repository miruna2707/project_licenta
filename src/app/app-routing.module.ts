import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {ResortComponent} from "./resort/resort.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ContactComponent} from "./contact/contact.component";
import {AvailComponent} from "./avail/avail.component";
import {PersonalDemo} from "./contact/Personal/personal.component";
import {SeatDemo} from "./contact/seat/seat.component";
import {PaymentDemo} from "./contact/payment/payment.component";
import {ConfirmationDemo} from "./contact/confirmation/confirmation.component";

const routes: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'resort', component: ResortComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'avail', component: AvailComponent, pathMatch: 'full'},
  {
    path: 'contact',
    component: ContactComponent,

    children:[
      {path: '', redirectTo: 'personal', pathMatch: 'full'},
      { path: 'personal', component: PersonalDemo },
      { path: 'seat', component: SeatDemo},
      {path: 'payment', component: PaymentDemo},
      {path:'confirmation', component: ConfirmationDemo}
    ],
  }

];

@NgModule({
  declarations: [],

  imports: [CommonModule,RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,RoomsComponent,ResortComponent, GalleryComponent, ContactComponent, AvailComponent]
