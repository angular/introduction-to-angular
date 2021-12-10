import { Component, OnInit } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private housingService: HousingService) { }

  city = "";
  housingLocationList: HousingLocation[] = [];
  searchResults: HousingLocation[] = [];

  ngOnInit(): void {
    this.housingLocationList = this.housingService.getLocations();
  }

  searchHousing() {
    if (this.city !== '') {
      this.searchResults = this.housingLocationList.filter(location => location.city.toLowerCase() === this.city.toLowerCase());
      this.searchResults;
    }
  }

}
