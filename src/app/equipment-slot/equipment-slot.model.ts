export class EquipmentSlot {
    public slotName: string = "";
    public imagePath: string = "";

    constructor (slotName: string, imagePath: string) {
        this.slotName = slotName;
        this.imagePath = imagePath;
    }
}