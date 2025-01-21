import { Component } from '@angular/core';
import { Country } from '../../interfaces/cocktail.interface';
import { CountriesService } from '../../services/cocktails.service';

type Region ='Africa'| 'Americas'| 'Asia'| 'Europe'| 'Oceania'

@Component({
  selector: 'app-by-region-page',
  standalone: false,

  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
public countries: Country[] = [];

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor( private countriesService: CountriesService ) { }

  searchByRegion(region: Region): void {

    this.selectedRegion = region;

    this.countriesService.searchRegion(region)
      .subscribe( countries => {
        this.countries = countries;
      })

    console.log("Desde region page");
  }
}
