import { Component } from '@angular/core';
import { HOME_ROUTE } from '../../../utilities/constants';
import { Guide } from 'src/app/guide-card/guide.model';
import { guideList } from 'src/utilities/guideList';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent {
  HOME_PATH:string = HOME_ROUTE;
  guides: Guide[] = guideList;
}