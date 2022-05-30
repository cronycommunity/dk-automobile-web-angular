import { Component } from '@angular/core';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  title = 'dk-automobile-web-angular';

  

  ngOnInit(): void {

  }
}
