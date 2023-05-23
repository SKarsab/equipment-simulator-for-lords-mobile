import { Component } from '@angular/core';
import { HOME_ROUTE, ORANGE, PARTIAL_CHAMP, MONSTER, WONDER, P2P, F2P, GOLD, CASTLES, DARKNEST, PURPLE, B424_ROUTE, B442_ROUTE, B244_ROUTE, B111_ROUTE, B505_ROUTE, BINF_ROUTE, BRAN_ROUTE, BCAV_ROUTE, B111_DEFENSE_ROUTE, BINF_BUDGET_ROUTE, BRAN_BUDGET_ROUTE, BCAV_BUDGET_ROUTE } from '../../../utilities/constants';
import { Build } from '../../build-card/build.model';
import { buildList } from 'src/utilities/buildList';

@Component({
    selector: 'app-builds-benchmarks',
    templateUrl: './builds-benchmarks.component.html',
    styleUrls: ['./builds-benchmarks.component.css']
})
export class BuildsBenchmarksComponent {
    HOME_PATH: string = HOME_ROUTE;
    builds: Build[] = buildList;
}