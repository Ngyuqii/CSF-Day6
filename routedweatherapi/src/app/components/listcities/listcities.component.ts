import { Component, OnInit } from '@angular/core';
import { CITIES, City } from 'src/app/models';

@Component({
  selector: 'app-listcities',
  templateUrl: './listcities.component.html',
  styleUrls: ['./listcities.component.css']
})

export class ListcitiesComponent implements OnInit {

  constructor(){ }

  cities: City[] = CITIES;

  //Sort the countries in descending order
  ngOnInit(): void {
    this.cities.sort((a,b)=> (a.country > b.country)? 1 : -1);
  }

  //Method to remove a city field from the list
  deleteItem(i: number) {
      this.cities.splice(i, 1);
  }

}