//PURPOSE : Central file with all constants reused in the application to avoid code duplication and organization. 
//          All components can import which constants are needed

import { IEquipment } from "src/interfaces/equipment";

//Routes for navigation
export const HOME_ROUTE: string = "/";
export const SIMULATOR_ROUTE: string = "/equipment-simulator";
export const BENCHMARKS_ROUTE: string = "/builds-benchmarks";
export const GUIDES_ROUTE: string = "/guides";
export const FAQ_ROUTE: string = "/faq";

export const B424_ROUTE: string = "/builds-benchmarks/builds/B424-war-of-wonders";
export const B442_ROUTE: string = "/builds-benchmarks/builds/B442-war-of-wonders";
export const B244_ROUTE: string = "/builds-benchmarks/builds/B244-war-of-wonders";
export const B111_ROUTE: string = "/builds-benchmarks/builds/B111-war-of-wonders";
export const B505_ROUTE: string = "/builds-benchmarks/builds/B505-multi-purpose";
export const BINF_ROUTE: string = "/builds-benchmarks/builds/B100-infantry-blast";
export const BRAN_ROUTE: string = "/builds-benchmarks/builds/B010-ranged-blast";
export const BCAV_ROUTE: string = "/builds-benchmarks/builds/B001-cavalry-blast";
export const B111_DEFENSE_ROUTE: string = "/builds-benchmarks/builds/B111-defense-rallies";
export const BINF_BUDGET_ROUTE: string = "/builds-benchmarks/builds/B100-infantry-budget-blast";
export const BRAN_BUDGET_ROUTE: string = "/builds-benchmarks/builds/B010-ranged-budget-blast";
export const BCAV_BUDGET_ROUTE: string = "/builds-benchmarks/builds/B001-cavalry-budget-blast";

export const GBATTALION_ROUTE: string = "/guides/G-battalion-lineups";
export const GDEFENDING_ROUTE: string = "/guides/G-defending-rallies";
export const GKVK_STRATEGY_ROUTE: string = "/guides/G-kvk-strategy";
export const GDA_STRATEGY_ROUTE: string = "/guides/G-da-strategy";
export const GWOW_STRATEGY_ROUTE: string = "/guides/G-wow-strategy";
export const GRALLY_PARTY_ROUTE: string = "/guides/G-rally-parties";
export const GGETTING_STARTED_ROUTE: string = "/guides/G-getting-started";
export const GRESOURCE_GENERATION_ROUTE: string = "/guides/G-resource-generation";
export const GFAMILIARS_ROUTE: string = "/guides/G-familiars";
export const GRESEARCH_FOCUS_ROUTE: string = "/guides/G-research-focus";
export const GMINMAXING_ROUTE: string = "/guides/G-minmaxing-stats";

//Misc
export const BASE_FILE_PATH: string = "./../../assets/Images/Equipment/";
export const BASE_ICON_FILE_PATH: string = "./../../assets/Images/BuildIcons/";
export const BASE_SHARED_PATH: string = "./../../assets/Images/Shared/";
export const BASE_GUIDE_PATH: string = "./../../assets/Images/GuidePreviews/";
export const HIDE_IMAGE_BREAKPOINT: number = 991;

//Rarities
export const JEWEL: string = "Jewel";
export const MYTHIC: string = "Mythic";
export const LEGENDARY: string = "Legendary";
export const EPIC: string = "Epic";

//Slot names
export const MAINHAND: string = "Mainhand";
export const OFFHAND: string = "Offhand";
export const HELMET: string = "Helmet";
export const CHEST: string = "Chest";
export const BOOTS: string = "Boots";
export const ACCESSORY: string = "Accessory";

//Colours for the application relating to game rarities
export const ORANGE: string = "#BC5A00";
export const GOLD: string = "#D1A500";
export const PURPLE: string = "#7245A4";
export const GREEN: string = "#29A329";
export const BLUE: string = "#2D5DC3";
export const GREY: string = "#9E9E9E";
export const TURQUOISE: string = "#04B6CE";

//Tags for builds
export const CHAMP: string = "Champ";
export const PARTIAL_CHAMP: string = "Partial Champ";
export const MONSTER: string = "Monster";
export const F2P: string = "F2P";
export const P2P: string = "P2P";
export const WONDER: string = "Wonders";
export const CASTLES: string = "Castles";
export const WOW: string = "WoW";
export const DRAGON_ARENA: string = "Dragon Arena";
export const KVK: string = "KvK";
export const DARKNEST: string = "Darknest";

export const DEFAULT_JEWEL: IEquipment = {
    type: JEWEL,
    rarity: LEGENDARY,
    name: "",
    imgPath: "",
    stats: []
}