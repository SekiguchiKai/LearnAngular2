import { Component } from '@angular/core';

import { Language } from './language';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Programming Language!';

  languages = [
    new Language('JavaScript', 'Dynamic'),
    new Language('TypeScript', 'Static'),
    new Language('Java', 'Static'),
    new Language('Python', 'Dynamic'),
    new Language('Go', 'Static'),
    new Language('Ruby', 'Dynamic')
  ];

  message = '';
  values = '';

  onClick() {
    this.message = 'Clicked';
  }

  onKey(value: string) {
    this.values += value + '|';
  }

}
