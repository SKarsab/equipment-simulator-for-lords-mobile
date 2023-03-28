import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() checkered!: boolean;
  @Input() colour!: string;
  @Input() navigationPath!: string;

  ngOnInit() {
    console.log(this.title + ": " + this.navigationPath);
  }
}