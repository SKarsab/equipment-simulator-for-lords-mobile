// PURPOSE : Component that creates one selectable equipment slot on the equipment simulator page. Each slot 
//           has 1 equipment option, and 3 jewel options. When clicked, the slot type (E.g. "Chest") is emitted
//           to the equipment-simulator component which fetches data from the backend and populates the modal

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-equipment-slot',
  templateUrl: './equipment-slot.component.html',
  styleUrls: ['./equipment-slot.component.css']
})
export class EquipmentSlotComponent {

  @Input() slotName!:string;
  @Input() currentEquipmentImage!:string;
  @Input() currentJewelImage1!:string;
  @Input() currentJewelImage2!:string;
  @Input() currentJewelImage3!:string;

  @Output() equipmentSelectEvent = new EventEmitter<string>();

  emitEquipmentType() {
    this.equipmentSelectEvent.emit(this.slotName);
  }
}