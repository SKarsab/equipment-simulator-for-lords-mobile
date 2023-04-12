import { Component } from '@angular/core';
import { EquipmentSlot } from '../../equipment-slot/equipment-slot.model';
import { HOME_ROUTE } from '../../../utilities/constants';

//Equipment, Jewels, and Sigils
import EquipmentJson from '../../../assets/json/equipment.json';
import JewelsJson from '../../../assets/json/jewels.json';
import SigilsJson from '../../../assets/json/sigils.json';

//All JSON files must follow this format to be used in the modal windows
interface iEquipment {
  tooltip: string;
  imgPath: string;
}

declare var $: any;

@Component({
  selector: 'app-equipment-simulator',
  templateUrl: './equipment-simulator.component.html',
  styleUrls: ['./equipment-simulator.component.css']
})
export class EquipmentSimulatorComponent {
  HOME_PATH:string = HOME_ROUTE;

  equipmentSlotList: EquipmentSlot[] = [
    new EquipmentSlot("Mainhand", "./../../assets/Images/Equipment/mainHand.png", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG"),
    new EquipmentSlot("Offhand", "./../../assets/Images/Equipment/offHand.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG"),
    new EquipmentSlot("Helmet", "./../../assets/Images/Equipment/helmet.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG"),
    new EquipmentSlot("Accessory", "./../../assets/Images/Equipment/equipmentSlot.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG"),
    new EquipmentSlot("Chest", "./../../assets/Images/Equipment/chest.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG"),
    new EquipmentSlot("Accessory", "./../../assets/Images/Equipment/equipmentSlot.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG"),
    new EquipmentSlot("Boots", "./../../assets/Images/Equipment/boots.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG"),
    new EquipmentSlot("Accessory", "./../../assets/Images/Equipment/equipmentSlot.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG", "./../../assets/Images/Equipment/jewel.PNG")
  ];

  equipmentArray: iEquipment[] = EquipmentJson.Mainhand.Mythic;
  jewelsArray: iEquipment[] = JewelsJson.Legendary;
  sigilsArray: iEquipment[] = SigilsJson.Legendary;

  slotName: string = "";
  equipment: any = {};
  jewels: any = {};
  sigils: any = {};

  constructor() { 
    //Put JSON Imports into a JS Object to dynamically change arrays
    this.equipment = JSON.parse(JSON.stringify(EquipmentJson));
    this.jewels = JSON.parse(JSON.stringify(JewelsJson));
    this.sigils = JSON.parse(JSON.stringify(SigilsJson));
  }

  getEquipmentInfo(type: string)
  {
    //Fetch from backend
    this.populateModal(type);
  }

  populateModal(type: string)
  {
    //Change modal content
    this.slotName = type;
    this.equipmentArray = this.equipment[type].Mythic;
    this.jewelsArray = JewelsJson.Legendary;
    this.sigilsArray = SigilsJson.Legendary;

    //Initialize Tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();
  }

  changeRarity(rarity: string) 
  {
    this.equipmentArray = this.equipment[this.slotName][rarity];

    if (rarity == "Mythic")
    {
      this.jewelsArray = JewelsJson.Legendary;
      this.sigilsArray = SigilsJson.Legendary;
    }
    else
    {
      this.jewelsArray = this.jewels[rarity];
      this.sigilsArray = this.sigils[rarity];
    }
    
    //Initialize Tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();
  }

  equipmentSelected(equipment: string)
  {
    console.log(equipment);

    //Send imgPath to child component to show change
    //Add stats to stats window
  }

  jewelSelected(jewel: string)
  {
    console.log(jewel);

    //Send imgPath to child component to show change
    //Add stats to stats window
  }

  sigilSelected(sigil: string)
  {
    console.log(sigil);

    //Send imgPath to child component to show change
    //Add stats to stats window
  }
}