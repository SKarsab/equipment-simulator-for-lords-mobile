// PURPOSE : All JSON files must follow this format to be used in the modal windows

import { IStat } from "./stat";

export interface IEquipment {
    type: string,
    rarity: string,
    name: string;
    imgPath: string,
    stats: IStat[]
}