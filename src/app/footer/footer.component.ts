import { Component } from '@angular/core';
import { HOME_ROUTE, SIMULATOR_ROUTE, BENCHMARKS_ROUTE, GUIDES_ROUTE, FAQ_ROUTE } from '../../utilities/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  HOME_PATH:string =  HOME_ROUTE;
  SIMULATOR_PATH:string = SIMULATOR_ROUTE;
  BENCHMARKS_PATH:string = BENCHMARKS_ROUTE;
  GUIDES_PATH:string = GUIDES_ROUTE;
  FAQ_PATH:string = FAQ_ROUTE;
}