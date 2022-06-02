import { Component, OnInit } from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {styles} from "./mapstyles";


@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.css']
})

export class ResortComponent implements OnInit {

  title = 'google-maps';

  private map: google.maps.Map | undefined

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyAZwy5v-ofr46H_IAJWr5tdaYb80omd8UU'
    })

    loader.load().then(() => {
      console.log('loaded gmaps')

      const location = { lat: 45.6793197320134, lng: 	23.938487153966392}

        this.map = new google.maps.Map(document.getElementById("map")!, {

        center: location,
        zoom: 6,
        styles: styles
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }
}
