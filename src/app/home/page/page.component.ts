import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent  {
  people: any[] = [ { 'country': 'UK', 'people': [ { "name": "Douglas Pace" }, { "name": "Mcleod Mueller" }, ] },
  { 'country': 'US', 'people': [ { "name": "Day Meyers" }, { "name": "Aguirre Ellis" }, { "name": "Cook Tyson" } ] },
  { 'country': 'MARS', 'people': [ { "name": "Douglas Pace" }, { "name": "Mcleod Mueller" }, ] } ];

}
