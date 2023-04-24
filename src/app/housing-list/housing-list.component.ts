import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent {
  @Input() locationList: HousingLocation[] = [];
  results:HousingLocation[] = [];
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();
  
  //

  searchHousingLocations(searchText: string) {
    if (!searchText) return;
    this.results = this.locationList
    .filter(
      location => location.city.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
}
