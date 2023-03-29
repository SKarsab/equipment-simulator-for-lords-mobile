import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-equipment-slot',
  templateUrl: './equipment-slot.component.html',
  styleUrls: ['./equipment-slot.component.css']
})
export class EquipmentSlotComponent {

  @Input() slotName: string = "";
  @Input() buttonImgPath: string = "";

  defaultJewelSlot: string = "./../../assets/Images/Equipment/jewel.PNG";
  defaultSigilSlot: string = "./../../assets/Images/Equipment/jewel.PNG";

  currentJewelSlot1: string;
  currentJewelSlot2: string;
  currentJewelSlot3: string;

  //@Output() equipmentType: EventEmitter<string> = new EventEmitter()
  @Output() equipmentType = new EventEmitter<string>();

  constructor() { 
    this.currentJewelSlot1 = this.defaultJewelSlot;
    this.currentJewelSlot2 = this.defaultJewelSlot;
    this.currentJewelSlot3 = this.defaultJewelSlot;
  }

  emitEquipmentType() {
    this.equipmentType.emit(this.slotName);
  }
}