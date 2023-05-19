// PURPOSE : Component that creates one selectable equipment slot on the equipment simulator page. Each slot 
//           has 1 equipment option, and 3 jewel options. When clicked, the slot type (E.g. "Chest") is emitted
//           to the equipment-simulator component which fetches data from the backend and populates the modal

import { Component, EventEmitter, Input, Output, SimpleChanges  } from '@angular/core';
import { EquipmentSlot } from './equipment-slot.model';
import { BASE_FILE_PATH, DEFAULT_JEWEL } from 'src/utilities/constants';
import { IEquipment } from 'src/interfaces/equipment';

@Component({
  selector: 'app-equipment-slot',
  templateUrl: './equipment-slot.component.html',
  styleUrls: ['./equipment-slot.component.css']
})
export class EquipmentSlotComponent {
  BASE_IMAGE_PATH: string = BASE_FILE_PATH;

  @Input() equipmentSlot!: EquipmentSlot;
  @Output() equipmentSelectEvent = new EventEmitter<any>();
  @Output() removeJewelEvent = new EventEmitter<any>();

  emitEquipmentType() {
    this.equipmentSelectEvent.emit({type: this.equipmentSlot.type, slotName: this.equipmentSlot.slotName});
  }

  emitRemoveJewel(jewelToRemove: IEquipment) {
    if (jewelToRemove.imgPath === "")
    {
      return;
    }

    let slotNumber: number = 0;

    //Remove the jewel from the equipment slot if there is a jewel in the first place
    if (this.equipmentSlot.currentJewel1.name === jewelToRemove.name)
    {
      this.equipmentSlot.currentJewel1 = DEFAULT_JEWEL;
      slotNumber = 1;
    }
    else if (this.equipmentSlot.currentJewel2.name === jewelToRemove.name)
    {
      this.equipmentSlot.currentJewel2 = DEFAULT_JEWEL;
      slotNumber = 2;
    }
    else if (this.equipmentSlot.currentJewel3.name === jewelToRemove.name)
    {
      this.equipmentSlot.currentJewel3 = DEFAULT_JEWEL;
      slotNumber = 3;
    }

    this.removeJewelEvent.emit({jewel: jewelToRemove, slotName: this.equipmentSlot.slotName, slot: slotNumber});
  }

  //DEBUG
  ngOnChanges(changes: SimpleChanges) {
    console.log("CHANGES", changes);
  }
}