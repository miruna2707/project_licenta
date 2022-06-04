import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MdbDropdownModule} from "mdb-angular-ui-kit/dropdown";

import {
  CarouselModule,
  IconsModule,
  MDBBootstrapModule, MDBRootModule,
  NavbarModule,
  WavesModule
} from "angular-bootstrap-md";
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {CdkTableModule} from "@angular/cdk/table";
import {ChildrenOutletContexts, Router, RouterModule} from "@angular/router";
import { RoomsComponent } from './rooms/rooms.component';
import { ResortComponent } from './resort/resort.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HighlightDirective } from './highlight.directive';
import {MatTabsModule} from '@angular/material/tabs';
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import {ImageModule} from "primeng/image";
import {MatCardModule} from "@angular/material/card";
import {CardModule} from "primeng/card";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {SpeedDialModule} from "primeng/speeddial";
import {InplaceModule} from "primeng/inplace";
import {SplitButtonModule} from "primeng/splitbutton";
import {ButtonModule} from "primeng/button";
import {FileUploadModule} from "primeng/fileupload";
import {CalendarModule} from "primeng/calendar";
import {StepsModule} from 'primeng/steps';
import {MenuModule} from 'primeng/menu';
import {MenuItem, MessageService} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
import { AvailComponent } from './avail/avail.component';
import {TicketService} from "./contact/TicketService";
import {ToastModule} from "primeng/toast";
import {PersonalDemo} from "./contact/Personal/personal.component";
import {PaymentDemo} from "./contact/payment/payment.component";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {SeatDemo} from "./contact/seat/seat.component";
import {ConfirmationDemo} from "./contact/confirmation/confirmation.component";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";  //required when using MegaMenu

//import { AgmCoreModule } from '@agm/core';





@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavComponent,
    HomeComponent,
    RoomsComponent,
    ResortComponent,
    GalleryComponent,
    ContactComponent,
    routingComponents,
    HighlightDirective,
    AvailComponent,
    PersonalDemo,
    ConfirmationDemo,
    SeatDemo,
    PaymentDemo
  ],
  imports: [
    BrowserModule,
    MdbDropdownModule,
    StepsModule,
    CalendarModule,
    IconsModule,
    MatTabsModule,
    IconsModule,
    WavesModule,
    NavbarModule,
    NavbarModule,
    NavbarModule,
    IconsModule,
    WavesModule,
    DropdownModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    CdkTableModule,
    RouterModule,
    // CarouselModule,
    // MdbCarouselModule,
    MDBBootstrapModule.forRoot(),
    MDBRootModule,
    ImageModule,
    MatCardModule,
    CardModule,
    ConfirmDialogModule,
    SpeedDialModule,
    InplaceModule,
    SplitButtonModule,
    ButtonModule,
    FileUploadModule,
    CalendarModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    InputMaskModule,
    //AgmCoreModule.forRoot({
    //apiKey:'AIzaSyCxpXL86W6evGUGIVRP0MDRO1JzrIL0f_0'
    //})
    //MDBBootstrapModule.forRoot()
  ],
  providers: [ChildrenOutletContexts,MessageService,TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
