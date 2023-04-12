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