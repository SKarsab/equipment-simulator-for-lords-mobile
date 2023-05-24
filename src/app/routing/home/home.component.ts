// PURPOSE : Landing page for the application. Displays a pseudo hero image, header, features 
//           and navigation to all available pages

import { Component } from '@angular/core';
import { Feature } from '../../feature-card/feature.model';
import { Build } from 'src/app/build-card/build.model';
import { buildList } from 'src/utilities/buildList';
import { featureList } from 'src/utilities/featureList';
import { Guide } from 'src/app/guide-card/guide.model';
import { guideList } from 'src/utilities/guideList';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    builds: Build[] = buildList;
    features: Feature[] = featureList;
    guides: Guide[] = guideList;
}