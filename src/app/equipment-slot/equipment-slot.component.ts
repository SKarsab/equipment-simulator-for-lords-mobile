// PURPOSE : Component that creates one selectable equipment slot on the equipment simulator page. Each slot 
//           has 1 equipment option, and 3 jewel options. When clicked, the slot type (E.g. "Chest") is emitted
//           to the equipment-simulator component which fetches data from the backend and populates the modal

import { Component, EventEmitter, Input, Output, SimpleChanges  } from '@angular/core';
import { EquipmentSlot } from './equipment-slot.model';
import { BASE_FILE_PATH } from 'src/utilities/constants';

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

  emitRemoveJewel() {
    //DEBUG
    console.log("REMOVING JEWEL");
    //this.removeJewelEvent.emit();
  }

  //DEBUG
  ngOnChanges(changes: SimpleChanges) {
    console.log("CHANGES", changes);
  }
}