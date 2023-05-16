// PURPOSE : Component instantiates 8 equipment-slot components on the page. When the user clicks on one, data
//           fetched from the backend for that slot, and populates the modal pop up window. When a piece of 
//           equipment is selected from that modal, the selected is communicated back to the child equipment-slot 
//           component to show the selection, and the stats are calculated

import { Component } from '@angular/core';
import { EquipmentSlot } from '../../equipment-slot/equipment-slot.model';
import { HOME_ROUTE, BASE_FILE_PATH, MYTHIC, LEGENDARY, EPIC, ORANGE, GOLD, PURPLE } from '../../../utilities/constants';
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
  jewels: IEquipment[] = [];
  jewelsArray: IEquipment[] = [];

  slotName: string = "";
  equipmentColour: string = "#BC5A00";
  jewelColour: string = "#BC5A00";

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

  // DESCRIPTION :
  //  Fetch all available equipment data from backend for selected slot/type
  // PARAMETERS  :
  //  type - the selected equipment slot/type (E.g. "Helmet", "Chest")
  getEquipmentInfo(type: string)
  {
    this.equipmentService.getEquipment(type)
      .subscribe(response => this.equipment = response);

    this.populateModal(type);
  }

  // DESCRIPTION :
  //  Populates the equipmentArray and jewelArray with the currently selected equipment 
  //  and rarity for the modal
  // PARAMETERS  :
  //  type - the selected equipment slot/type (E.g. "Helmet", "Chest")
  populateModal(type: string)
  {
    this.slotName = type;

    let selectedEquipment: IEquipment[] = this.equipment.filter(equipment => equipment.type === type && equipment.rarity === MYTHIC);
    this.equipmentArray = selectedEquipment;
    
    //DEBUG
    //Might need to store jewels in the same array or call backend twice?
    let selectedJewels: IEquipment[] = this.jewels.filter(jewel => jewel.type === type && jewel.rarity === LEGENDARY);
    this.jewelsArray = selectedJewels;
    
    //Initialize Tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();
  }

  // DESCRIPTION :
  //  Changes the equipmentArray and jewelArray with the currently selected equipment 
  //  rarity for the modal
  // PARAMETERS  :
  //  rarity - the selected equipment rarity (E.g. "Mythic", "Legendary")
  changeRarity(rarity: string) 
  {
    let selectedEquipment: IEquipment[] = this.equipment.filter(equipment => equipment.type === this.slotName && equipment.rarity === rarity);
    this.equipmentArray = selectedEquipment;

    if (rarity === MYTHIC)
    {
      this.equipmentColour = ORANGE;
      this.jewelColour = GOLD;
    }
    else if (rarity === LEGENDARY)
    {
      this.equipmentColour = GOLD;
      this.jewelColour = GOLD;
    }
    else if (rarity === EPIC)
    {
      this.equipmentColour = PURPLE;
      this.jewelColour = PURPLE;
    }

    //Initialize Tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();
  }

  // DESCRIPTION :
  //  DEBUG
  // PARAMETERS  :
  //  selectedEquipment - the selected equipment (E.g. "Frostwing Greatsword", "Venom Blade")
  equipmentSelected(selectedEquipment: string)
  {
    //DEBUG
    console.log(selectedEquipment);

    //Send imgPath to child component to show change
    //Add stats to stats window
  }

  // DESCRIPTION :
  //  DEBUG
  // PARAMETERS  :
  //  selectedJewel - the selected equipment (E.g. "Infantry Attack Jewel", "Champion Jewel")
  jewelSelected(selectedJewel: string)
  {
    //DEBUG
    console.log(selectedJewel);

    //Send imgPath to child component to show change
    //Add stats to stats window
  }
}