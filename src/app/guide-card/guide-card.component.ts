import { Component, Input } from '@angular/core';
import { BASE_GUIDE_PATH } from 'src/utilities/constants';

@Component({
    selector: 'app-guide-card',
    templateUrl: './guide-card.component.html',
    styleUrls: ['./guide-card.component.css']
})
export class GuideCardComponent {
    BASE_GUIDE_PATH: string = BASE_GUIDE_PATH;
    
    @Input() title!: string;
    @Input() imgPath!: string;
    @Input() description!: string;
    @Input() navigationPath!: string;
}