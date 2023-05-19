// PURPOSE : Component that creates one build card on the builds page. Each preview of a build contains an icon
//           title, date added, colour of the left hand border, navigation path, difficulty to obtain, and tags

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-build-card',
  templateUrl: './build-card.component.html',
  styleUrls: ['./build-card.component.css']
})
export class BuildCardComponent {
  @Input() imgPath!: string;
  @Input() title!: string;
  @Input() dateAdded!: string;
  @Input() colour!: string;
  @Input() navigationPath!: string;
  @Input() difficultyPlus!: number[];
  @Input() difficultyMinus!: number[];
  @Input() tags!: string[];
}