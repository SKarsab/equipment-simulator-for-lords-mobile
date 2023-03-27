import { Component } from '@angular/core';
import { HOME_ROUTE } from '../../../utilities/constants';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  HOME_PATH:string = HOME_ROUTE;
}