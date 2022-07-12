import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  countries: any[] = [];
  rows = [];
  columns = [
    { prop: 'name.common', name: 'Name' },
    { prop: 'capital', name: 'Capital' },
    { prop: 'population', name: 'Population' },
    { prop: 'cca2', name: 'Code' },
  ];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
  }
}
