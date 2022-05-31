import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MdbDropdownModule} from "mdb-angular-ui-kit/dropdown";
import {
  CarouselModule,
  DropdownModule,
  IconsModule,
  MDBBootstrapModule, MDBRootModule,
  NavbarModule,
  WavesModule
} from "angular-bootstrap-md";
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
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
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    MdbDropdownModule,
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
    //AgmCoreModule.forRoot({
    //apiKey:'AIzaSyCxpXL86W6evGUGIVRP0MDRO1JzrIL0f_0'
    //})
    //MDBBootstrapModule.forRoot()
  ],
  providers: [ChildrenOutletContexts],
  bootstrap: [AppComponent]
})
export class AppModule { }
