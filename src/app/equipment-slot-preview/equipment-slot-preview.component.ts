// PURPOSE : Component that creates one equipment slot preview with no functionality. Each slot 
//           has 1 equipment option, and 3 jewel options. This component is the same as equipment-slot 
//           component with no functionality as that is used int he equipment simulator page

import { Component, Input, OnInit } from '@angular/core';
import { EquipmentSlot } from './../equipment-slot/equipment-slot.model';
import { BASE_FILE_PATH } from 'src/utilities/constants';
import { IEquipment } from 'src/interfaces/equipment';
import { IStat } from 'src/interfaces/stat';

@Component({
  selector: 'app-equipment-slot-preview',
  templateUrl: './equipment-slot-preview.component.html',
  styleUrls: ['./equipment-slot-preview.component.css']
})
export class EquipmentSlotPreviewComponent {
  BASE_IMAGE_PATH: string = BASE_FILE_PATH;

  @Input() equipmentSlot!: EquipmentSlot;
}