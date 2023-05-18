import { IEquipment } from "src/interfaces/equipment";

export class EquipmentSlot {
    public slotName: string = "";
    public type: string = "";
    public currentEquipment: IEquipment;
    public currentJewel1: IEquipment;
    public currentJewel2: IEquipment;
    public currentJewel3: IEquipment;

    constructor (slotName: string, type: string, currentEquipment: IEquipment, currentJewel1: IEquipment, currentJewel2: IEquipment, currentJewel3: IEquipment) {
        this.slotName = slotName;
        this.type = type;
        this.currentEquipment = currentEquipment;
        this.currentJewel1 = currentJewel1;
        this.currentJewel2 = currentJewel2;
        this.currentJewel3 = currentJewel3;
    }
}