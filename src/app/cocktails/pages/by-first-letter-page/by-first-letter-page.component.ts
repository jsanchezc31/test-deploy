import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/cocktails.service';
import { Country } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-by-first-letter-page',
  standalone: false,
  templateUrl: './by-first-letter-page.component.html',
  styleUrl: './by-first-letter-page.component.css'
})
export class ByFirstLetterPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue:string = '';

  constructor( private countriesService: CountriesService ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByFirstLetter(term: string): void {
    this.isLoading = true;

    this.countriesService.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      })

    console.log("Desde firstLetter");
  }

}
