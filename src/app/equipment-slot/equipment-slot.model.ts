export class EquipmentSlot {
    public slotName: string = "";
    public type: string = "";
    public rarity: string = "";
    public currentEquipmentImage: string = "";
    public currentJewelImage1: string = "";
    public jewelRarity1: string = "";
    public currentJewelImage2: string = "";
    public jewelRarity2: string = "";
    public currentJewelImage3: string = "";
    public jewelRarity3: string = "";

    constructor (slotName: string, type: string, rarity: string, currentEquipmentImage: string, currentJewelImage1: string, jewelRarity1: string, currentJewelImage2: string, jewelRarity2: string, currentJewelImage3: string, jewelRarity3: string) {
        this.slotName = slotName;
        this.type = type;
        this.rarity = rarity;
        this.currentEquipmentImage = currentEquipmentImage;
        this.currentJewelImage1 = currentJewelImage1;
        this.jewelRarity1 = jewelRarity1;
        this.currentJewelImage2 = currentJewelImage2;
        this.jewelRarity2 = jewelRarity2;
        this.currentJewelImage3 = currentJewelImage3;
        this.jewelRarity3 = jewelRarity3;
    }
}