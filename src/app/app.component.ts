import { Component } from '@angular/core';

import { Language } from './lamguage';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <p>Languages: </p>
  <ul>
    <li *ngFor="let lang of langs">
    {{lang.name}}
    </li>
  </ul>
  
  `
})
export class AppComponent {
  title = 'Programming Language!';

  langs = [
    new Language('JavaScript', 'Dynamic'),
    new Language('TypeScript', 'Static'),
    new Language('Java', 'Static'),
    new Language('Python', 'Dynamic'),
    new Language('Go', 'Static'),
    new Language('Ruby', 'Dynamic')
  ];

}
