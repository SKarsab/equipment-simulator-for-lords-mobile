import { IStat } from "./stat";

//All JSON files must follow this format to be used in the modal windows
export interface IEquipment {
    type: string,
    rarity: string,
    name: string;
    imgPath: string,
    stats: IStat[]
}