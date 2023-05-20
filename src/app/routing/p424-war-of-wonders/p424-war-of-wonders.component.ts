import { Component, Input } from '@angular/core';
import { HOME_ROUTE, BENCHMARKS_ROUTE, ORANGE } from 'src/utilities/constants';

@Component({
  selector: 'app-p424-war-of-wonders',
  templateUrl: './p424-war-of-wonders.component.html',
  styleUrls: ['./p424-war-of-wonders.component.css']
})
export class P424WarOfWondersComponent {
  HOME_PATH: string = HOME_ROUTE;
  BUILD_PATH: string = BENCHMARKS_ROUTE;
  ORANGE: string = ORANGE;
}