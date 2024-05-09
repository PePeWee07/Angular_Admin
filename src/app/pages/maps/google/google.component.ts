import { CommonModule } from '@angular/common';
import { Component, Input ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';

import { GoogleMapsModule } from '@angular/google-maps';

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};


@Component({
  selector: 'app-google',
  standalone: true,
  imports: [CommonModule,PageTitleComponent,GoogleMapsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './google.component.html',
  styles: ``
})
export class GoogleComponent {

  longitude = -77.028333;
  latitude = -12.043333;
  zoom: number = 9;

  @Input() pitch: number = 10;
  @Input() scrollwheel: boolean = false;
  center: any;


  mapOptions: google.maps.MapOptions = {
    center: { lat: 48.8588548, lng: 2.347035 },
    zoom: 13,
  };

  markers: MarkerProperties[] = [
    { position: { lat: 48.8584, lng: 2.2945 } }, // Eiffel Tower
    { position: { lat: 48.8606, lng: 2.3376 } }, // Louvre Museum
    { position: { lat: 48.8530, lng: 2.3499 } }, // Cathédrale Notre-Dame de Paris
  ];

}
