import { Component } from '@angular/core';
import { HOME_ROUTE, BASE_ICON_FILE_PATH, ORANGE, PARTIAL_CHAMP, MONSTER, WONDER, P2P, F2P, P424_ROUTE, GOLD, CASTLES, DARKNEST, PURPLE } from '../../../utilities/constants';
import { Build } from '../../build-card/build.model';

@Component({
  selector: 'app-builds-benchmarks',
  templateUrl: './builds-benchmarks.component.html',
  styleUrls: ['./builds-benchmarks.component.css']
})
export class BuildsBenchmarksComponent {
  HOME_PATH: string = HOME_ROUTE;

  builds: Build[] = [
    new Build("./../../../assets/Images/BuildIcons/champ1.webp", "424 War of Wonders", "5/18/2023", ORANGE, P424_ROUTE, [1, 2, 3, 4], [5], [PARTIAL_CHAMP, MONSTER, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/champ2.webp", "442 War of Wonders", "5/18/2023", ORANGE, P424_ROUTE, [1, 2, 3, 4], [5], [PARTIAL_CHAMP, MONSTER, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/champ3.webp", "244 War of Wonders", "5/18/2023", ORANGE, P424_ROUTE, [1, 2, 3, 4], [5], [PARTIAL_CHAMP, MONSTER, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/frostwing.webp", "111 War of Wonders", "5/18/2023", GOLD, P424_ROUTE, [1, 2, 3], [4, 5], [PARTIAL_CHAMP, MONSTER, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/tidalTitan.webp", "505 Multi-purpose", "5/18/2023", GOLD, P424_ROUTE, [1, 2, 3], [4, 5], [PARTIAL_CHAMP, MONSTER, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/cottageroar.webp", "Infantry Blast Multi-purpose", "5/18/2023", GOLD, P424_ROUTE, [1, 2, 3], [4, 5], [MONSTER, CASTLES, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/helldrider.webp", "Ranged Blast Multi-purpose", "5/18/2023", GOLD, P424_ROUTE, [1, 2, 3], [4, 5], [MONSTER, CASTLES, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/gawrilla.webp", "Cavalry Blast Multi-purpose", "5/18/2023", GOLD, P424_ROUTE, [1, 2, 3], [4, 5], [MONSTER, CASTLES, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/frostwing.webp", "111 Defense Rallies", "5/18/2023", PURPLE, P424_ROUTE, [1, 2], [3, 4, 5], [MONSTER, CASTLES, F2P]),
    new Build("./../../../assets/Images/BuildIcons/mecha.webp", "Infantry Blast Multi-purpose", "5/18/2023", PURPLE, P424_ROUTE, [1, 2], [3, 4, 5], [MONSTER, CASTLES, DARKNEST, F2P]),
    new Build("./../../../assets/Images/BuildIcons/jade.webp", "Ranged Blast Multi-purpose", "5/18/2023", PURPLE, P424_ROUTE, [1, 2], [3, 4, 5], [MONSTER, CASTLES, DARKNEST, F2P]),
    new Build("./../../../assets/Images/BuildIcons/gargantua.webp", "Cavalry Blast Multi-purpose", "5/18/2023", PURPLE, P424_ROUTE, [1, 2], [3, 4, 5], [MONSTER, CASTLES, DARKNEST, F2P])
  ];
}