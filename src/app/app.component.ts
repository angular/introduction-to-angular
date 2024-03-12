import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fairhouse';
  housingLocationList: HousingLocation[] = [
    {
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/housing-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
  ];
}
