import { Component } from '@angular/core';

import arrayWords from "../utils/words";
import arrayCountries from "../utils/countries";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  country = ''
  limit = 10;


  handleSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generate() {
    this.words = arrayWords.slice(0, this.limit).join(" ");
  }

  generateCountry() {
    this.country = arrayCountries[Math.floor(Math.random() * 20)]
  }
}
