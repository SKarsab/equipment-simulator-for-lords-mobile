import { Component } from '@angular/core';
import { HOME_ROUTE } from '../../../utilities/constants';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent {
  HOME_PATH = HOME_ROUTE;
}
