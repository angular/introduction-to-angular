import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fairhouse';

  housingLocationList: HousingLocation[] = [
    {
      name: "Location One",
      city: "Chicago",
      state: "IL",
      photo: "../assets/pexels-pixabay-276724.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "Location Two",
      city: "Santa Monica",
      state: "CA",
      photo: "/path/to/photo",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: "Location Three",
      city: "Juneau",
      state: "AK",
      photo: "/path/to/photo",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ];

  selectedLocation: HousingLocation | undefined;// = this.housingLocationList[0];

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
