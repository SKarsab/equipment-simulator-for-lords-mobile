import { Component } from '@angular/core';
import { HOME_ROUTE } from '../../../utilities/constants';

@Component({
  selector: 'app-builds-benchmarks',
  templateUrl: './builds-benchmarks.component.html',
  styleUrls: ['./builds-benchmarks.component.css']
})
export class BuildsBenchmarksComponent {
  HOME_PATH:string = HOME_ROUTE;
}