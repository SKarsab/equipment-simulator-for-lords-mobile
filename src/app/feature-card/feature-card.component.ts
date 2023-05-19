// PURPOSE : Component that creates one feature on the home page. Current features are "Equipment Simulator", 
//           "Builds and BEnchmarks", "Guides". and "About".

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() checkered!: boolean; //Dark grey background if true, normal page background if false
  @Input() colour!: string;
  @Input() navigationPath!: string;
}