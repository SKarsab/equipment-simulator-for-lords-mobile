import { Guide } from "src/app/guide-card/guide.model";
import { GBATTALION_ROUTE, GDEFENDING_ROUTE, GKVK_STRATEGY_ROUTE, GDA_STRATEGY_ROUTE, GWOW_STRATEGY_ROUTE, GRALLY_PARTY_ROUTE, GGETTING_STARTED_ROUTE, GRESOURCE_GENERATION_ROUTE, GFAMILIARS_ROUTE, GRESEARCH_FOCUS_ROUTE, GMINMAXING_ROUTE } from './constants';

export const guideList: Guide[] = [
    new Guide("Battalion Line-ups", "battalionLineUps.png", "Learn how to set up your battalions for rallies with heroes, familiars, and the ins and outs of squad manipulation.", GBATTALION_ROUTE),
    new Guide("Defending Rallies", "defendingRallies.png", "Learn how to turn every situation into the best possible outcome when defending from single rallies, doubles, or parties.", GDEFENDING_ROUTE),
    new Guide("Kingdom vs Kingdom Strategy", "kvk.png", "Learn how to get the most points possible with your time available, and tips to score number one in the kingdom.", GKVK_STRATEGY_ROUTE),
    new Guide("Dragon Arena Strategy", "dragonArena.png", "Learn how to split the map up in your favour, and stay in control of the flow of events in Dragon Arena.", GDA_STRATEGY_ROUTE),
    new Guide("War of Wonders Strategy", "warOfWonders.png", "Learn how to secure your kingdom from the opposing competition and reap the benefits of overlord.", GWOW_STRATEGY_ROUTE),
    new Guide("Rally Parties", "rallyParties.png", "Learn how to organize and manage a rally party to zero some large targets in your kingdom with allies.", GRALLY_PARTY_ROUTE),
    new Guide("Getting Started", "gettingStarted.png", "Learn where to start and which direction you should go in for all aspects of the game depending on your goals.", GGETTING_STARTED_ROUTE),
    new Guide("Resource Generation", "resourceGeneration.png", "Learn how to get the most resources generated per hour to start stockpiling, and stop breaking resource cards.", GRESOURCE_GENERATION_ROUTE),
    new Guide("Familiars", "familiars.png", "Learn which familiars are worth your time, and resources, which ones aren't, and what order you should unlock them in.", GFAMILIARS_ROUTE),
    new Guide("Research Focus", "researchFocus.png", "Learn what research is the top priority, and impacts your gameplay the most to avoid research might bloat.", GRESEARCH_FOCUS_ROUTE),
    new Guide("Minmaxing Stats", "minmaxingStats.png", "Learn how to squeeze the absolute maximum amount of stats out of your account to always be at your strongest when facing a tough opponent.", GMINMAXING_ROUTE)
];