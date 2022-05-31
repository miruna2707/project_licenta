import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {ResortComponent} from "./resort/resort.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'resort', component: ResortComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [],

  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
