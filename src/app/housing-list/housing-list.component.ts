import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from 'src/housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  @Input() locationList: HousingLocation[] = [];
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  results: HousingLocation[] = [];

  constructor() {}

  searchHousingLocations(searchText: Event) {
    let inputText = (searchText.target as HTMLInputElement).value;

    if (!inputText) return;
    this.results = this.locationList.filter((location) => {
      return location.city.toLowerCase().includes(inputText.toLowerCase());
    });

    return this.results;
  }

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }

  apertarEnter(event: any) {
    if (event.keyCode === 13) {
      console.log(this.searchHousingLocations(event.target.value));
    }
  }

  ngOnInit(): void {}
}
