export class EquipmentSlot {
    public slotName:string = "";
    public currentEquipmentImage:string = "";
    public currentJewelImage1:string = "";
    public currentJewelImage2:string = "";
    public currentJewelImage3:string = "";

    constructor (slotName:string, currentEquipmentImage:string, currentJewelImage1:string, currentJewelImage2:string, currentJewelImage3:string,) {
        this.slotName = slotName;
        this.currentEquipmentImage = currentEquipmentImage;
        this.currentJewelImage1 = currentJewelImage1;
        this.currentJewelImage2 = currentJewelImage2;
        this.currentJewelImage3 = currentJewelImage3;
    }
}