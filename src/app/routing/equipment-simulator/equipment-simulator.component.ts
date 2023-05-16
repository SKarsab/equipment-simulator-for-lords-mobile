import { Component } from '@angular/core';
import { EquipmentSlot } from '../../equipment-slot/equipment-slot.model';
import { HOME_ROUTE, BASE_FILE_PATH } from '../../../utilities/constants';
import { EquipmentService } from 'src/app/equipment.service';
import { IEquipment } from 'src/interfaces/equipment';

declare var $: any;

@Component({
  selector: 'app-equipment-simulator',
  templateUrl: './equipment-simulator.component.html',
  styleUrls: ['./equipment-simulator.component.css']
})
export class EquipmentSimulatorComponent {
  HOME_PATH:string = HOME_ROUTE;
  BASE_IMAGE_PATH:string = BASE_FILE_PATH;
  equipment: IEquipment[] = [];

  equipmentArray: IEquipment[] = [];
  jewelsArray: IEquipment[] = [];
  sigilsArray: IEquipment[] = [];

  slotName: string = "";

  equipmentSlotList: EquipmentSlot[] = [
    new EquipmentSlot("Mainhand", BASE_FILE_PATH + "mainHand.png", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG"),
    new EquipmentSlot("Offhand", BASE_FILE_PATH + "offHand.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG"),
    new EquipmentSlot("Helmet", BASE_FILE_PATH + "helmet.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG"),
    new EquipmentSlot("Accessory", BASE_FILE_PATH + "equipmentSlot.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG"),
    new EquipmentSlot("Chest", BASE_FILE_PATH + "chest.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG"),
    new EquipmentSlot("Accessory", BASE_FILE_PATH + "equipmentSlot.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG"),
    new EquipmentSlot("Boots", BASE_FILE_PATH + "boots.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG"),
    new EquipmentSlot("Accessory", BASE_FILE_PATH + "equipmentSlot.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG", BASE_FILE_PATH + "jewel.PNG")
  ];

  constructor(private equipmentService: EquipmentService) { }

  getEquipmentInfo(type: string)
  {
    //Fetch from backend
    this.equipmentService.getEquipment(type)
      .subscribe(response => this.equipment = response);

      //DEBUG
      console.log("INCOMING EQUIPMENT: ", this.equipment);
    this.populateModal(type);
  }

  populateModal(type: string)
  {
    //Change modal content
    this.slotName = type;

    let selectedEquipment: IEquipment[] = this.equipment.filter(equipment => equipment.type === type && equipment.rarity === "Mythic");
    this.equipmentArray = selectedEquipment;
    
    //DEBUG
    console.log("Selected Equipment", this.equipmentArray);

    //Initialize Tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();
  }

  changeRarity(rarity: string) 
  {
    let selectedEquipment: IEquipment[] = this.equipment.filter(equipment => equipment.type === this.slotName && equipment.rarity === rarity);
    this.equipmentArray = selectedEquipment;

    //DEBUG
    console.log("Selected Equipment", this.equipmentArray);

    // if (rarity == "Mythic")
    // {
    //   this.jewelsArray = JewelsJson.Legendary;
    //   this.sigilsArray = SigilsJson.Legendary;
    // }
    // else
    // {
    //   this.jewelsArray = this.jewels[rarity];
    //   this.sigilsArray = this.sigils[rarity];
    // }
    
    //Initialize Tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();
  }

  equipmentSelected(selectedEquipment: string)
  {
    //DEBUG
    console.log(selectedEquipment);

    //Send imgPath to child component to show change
    //Add stats to stats window
  }

  jewelSelected(selectedJewel: string)
  {
    //DEBUG
    console.log(selectedJewel);

    //Send imgPath to child component to show change
    //Add stats to stats window
  }
}