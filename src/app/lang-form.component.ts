import { Component } from '@angular/core';
import { Lang } from './lang';

@Component({
    selector: 'lang-form',
    templateUrl: './lang-form.component.html',
    styleUrls: ['./app.component.css']
})
export class LangFormComponent {
    types = ['Static', 'Dynamic'];
    model = new Lang(1, 'Java', this.types[0], 'Spring');
    sumitted = false;
    onsubmit() { this.sumitted = true; }

    // これは後で消す
    get diagnostic() { return JSON.stringify(this.model); }
}