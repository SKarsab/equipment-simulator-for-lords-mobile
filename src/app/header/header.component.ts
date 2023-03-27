import { Component } from '@angular/core';
import { HOME_ROUTE, SIMULATOR_ROUTE, GUIDES_ROUTE, FAQ_ROUTE } from '../../utilities/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  HOME_PATH =  HOME_ROUTE;
  SIMULATOR_PATH = SIMULATOR_ROUTE;
  GUIDES_PATH = GUIDES_ROUTE;
  FAQ_PATH = FAQ_ROUTE;
}