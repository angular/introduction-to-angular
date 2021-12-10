import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  housingLocationList: HousingLocation[] = [
    {
      id: 1,
      name: 'Location One',
      description: 'Safe place',
      city: 'Chicago'
    },
    {
      id: 2,
      name: 'Location Two',
      description: 'Safe place',
      city: 'Chicago'
    },
    {
      id: 3,
      name: 'Location Three',
      description: 'Safe place',
      city: 'Chicago'
    },
  ];

  getLocations() {
    return this.housingLocationList;
  }
}
