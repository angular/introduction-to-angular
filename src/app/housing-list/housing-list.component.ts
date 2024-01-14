import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>(); 


  // mehtod to trigger locationSelectedEvent when a user clicks on a search result @param location of type HousingLocation 
  selectHousingLocation(location: HousingLocation){
    this.locationSelectedEvent.emit(location);

  }

  /**
   * Method to display a result set to filter the locationList by the user input and display it 
   * @param searchText 
   * @returns filtered result set or none if searchText is empty
   */
  searchHousingLocations(searchText: string) {
    if(!searchText) return; 
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city
        .toLowerCase()
        .includes(
          searchText.toLowerCase()

        ));
    return this.results; 
  }
}
