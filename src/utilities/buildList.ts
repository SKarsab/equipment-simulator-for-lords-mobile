import { Build } from "src/app/build-card/build.model";
import { ORANGE, PARTIAL_CHAMP, MONSTER, WONDER, P2P, F2P, GOLD, CASTLES, DARKNEST, PURPLE, B424_ROUTE, B442_ROUTE, B244_ROUTE, B111_ROUTE, B505_ROUTE, BINF_ROUTE, BRAN_ROUTE, BCAV_ROUTE, B111_DEFENSE_ROUTE, BINF_BUDGET_ROUTE, BRAN_BUDGET_ROUTE, BCAV_BUDGET_ROUTE } from "./constants";

export const buildList: Build[] = [
    new Build("./../../../assets/Images/BuildIcons/champ1.webp", "424 War of Wonders", "5/18/2023", ORANGE, B424_ROUTE, [1, 2, 3, 4], [5], [PARTIAL_CHAMP, MONSTER, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/champ2.webp", "442 War of Wonders", "5/18/2023", ORANGE, B442_ROUTE, [1, 2, 3, 4], [5], [PARTIAL_CHAMP, MONSTER, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/champ3.webp", "244 War of Wonders", "5/18/2023", ORANGE, B244_ROUTE, [1, 2, 3, 4], [5], [PARTIAL_CHAMP, MONSTER, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/frostwing.webp", "111 War of Wonders", "5/20/2023", GOLD, B111_ROUTE, [1, 2, 3], [4, 5], [PARTIAL_CHAMP, MONSTER, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/tidalTitan.webp", "505 Multi-purpose", "5/20/2023", GOLD, B505_ROUTE, [1, 2, 3], [4, 5], [PARTIAL_CHAMP, MONSTER, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/cottageroar.webp", "Infantry Blast Multi-purpose", "5/22/2023", GOLD, BINF_ROUTE, [1, 2, 3], [4, 5], [MONSTER, CASTLES, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/helldrider.webp", "Ranged Blast Multi-purpose", "5/22/2023", GOLD, BRAN_ROUTE, [1, 2, 3], [4, 5], [MONSTER, CASTLES, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/gawrilla.webp", "Cavalry Blast Multi-purpose", "5/22/2023", GOLD, BCAV_ROUTE, [1, 2, 3], [4, 5], [MONSTER, CASTLES, WONDER, P2P]),
    new Build("./../../../assets/Images/BuildIcons/frostwing.webp", "111 Defense Rallies", "5/20/2023", PURPLE, B111_DEFENSE_ROUTE, [1, 2], [3, 4, 5], [MONSTER, CASTLES, F2P]),
    new Build("./../../../assets/Images/BuildIcons/mecha.webp", "Infantry Blast Multi-purpose", "5/22/2023", PURPLE, BINF_BUDGET_ROUTE, [1, 2], [3, 4, 5], [MONSTER, CASTLES, DARKNEST, F2P]),
    new Build("./../../../assets/Images/BuildIcons/jade.webp", "Ranged Blast Multi-purpose", "5/22/2023", PURPLE, BRAN_BUDGET_ROUTE, [1, 2], [3, 4, 5], [MONSTER, CASTLES, DARKNEST, F2P]),
    new Build("./../../../assets/Images/BuildIcons/gargantua.webp", "Cavalry Blast Multi-purpose", "5/22/2023", PURPLE, BCAV_BUDGET_ROUTE, [1, 2], [3, 4, 5], [MONSTER, CASTLES, DARKNEST, F2P])
  ];