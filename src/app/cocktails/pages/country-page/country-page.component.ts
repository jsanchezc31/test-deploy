import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/cocktails.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-country-page',
  standalone: false,
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

public country?: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode(id) ),
      )
      .subscribe( (country) => {
        console.log(country)
        if(!country){
          this.router.navigateByUrl('');
          return;
        }

        this.country = country;
        console.log("Tenemos un valor")
        return;
      });
  }

}
