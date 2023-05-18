// PURPOSE : Component instantiates 8 equipment-slot components on the page. When the user clicks on one, data
//           fetched from the backend for that slot, and populates the modal pop up window. When a piece of 
//           equipment is selected from that modal, the selected is communicated back to the child equipment-slot 
//           component to show the selection, and the stats are calculated

import { Component } from '@angular/core';
import { EquipmentSlot } from '../../equipment-slot/equipment-slot.model';
import { defaultEquipmentSlots } from '../../../utilities/equipmentSlots';
import { HOME_ROUTE, BASE_FILE_PATH, MYTHIC, LEGENDARY, JEWEL, MAINHAND } from '../../../utilities/constants';
import { EquipmentService } from 'src/app/equipment.service';
import { IEquipment } from 'src/interfaces/equipment';

declare var $: any;

@Component({
  selector: 'app-equipment-simulator',
  templateUrl: './equipment-simulator.component.html',
  styleUrls: ['./equipment-simulator.component.css']
})
export class EquipmentSimulatorComponent {
  HOME_PATH: string = HOME_ROUTE;
  BASE_IMAGE_PATH: string = BASE_FILE_PATH;
  equipmentSlotList: EquipmentSlot[] = defaultEquipmentSlots;

  equipment: IEquipment[] = [];
  equipmentArray: IEquipment[] = [];
  jewels: IEquipment[] = [];
  jewelsArray: IEquipment[] = [];

  slotName: string = "";
  type: string = "";
  rarity: string = "";
  jewelRarity:string = "";
  stats: string = "Test Stats: 20%";

  constructor(private equipmentService: EquipmentService) { }

  //DEBUG
  ngOnInit() {
    this.getEquipmentInfo({type: MAINHAND, slotName: MAINHAND});
  }

  // DESCRIPTION :
  //  Fetch all available equipment data from backend for selected slot/type
  // PARAMETERS  :
  //  type - the selected equipment slot/type (E.g. "Helmet", "Chest")
  getEquipmentInfo(equipmentSelectEvent:any)
  {
    this.slotName = equipmentSelectEvent.slotName;
    this.type = equipmentSelectEvent.type;
    this.rarity = MYTHIC;
    this.jewelRarity = LEGENDARY;

    this.equipmentService.getEquipment(equipmentSelectEvent.type)
      .subscribe(response => this.equipment = response);

    this.equipmentService.getEquipment(JEWEL)
      .subscribe(response => this.jewels = response);

    this.populateModal();
  }

  // DESCRIPTION :
  //  Populates the equipmentArray and jewelArray with the currently selected equipment 
  //  and rarity for the modal
  // PARAMETERS  :
  //  type - the selected equipment slot/type (E.g. "Helmet", "Chest")
  populateModal()
  {
    let selectedEquipment: IEquipment[] = this.equipment.filter(equipment => equipment.type === this.type && equipment.rarity === MYTHIC);
    this.equipmentArray = selectedEquipment;
    
    let selectedJewels: IEquipment[] = this.jewels.filter(jewel => jewel.rarity === LEGENDARY);
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
    //There are no mythic jewels, so display legendary on both mythic and legendary
    this.rarity = rarity;
    this.jewelRarity = rarity === MYTHIC || rarity === LEGENDARY ? LEGENDARY : rarity;

    let selectedEquipment: IEquipment[] = this.equipment.filter(equipment => equipment.type === this.type && equipment.rarity === rarity);
    this.equipmentArray = selectedEquipment;

    let selectedJewels: IEquipment[] = this.jewels.filter(jewel => jewel.rarity === this.jewelRarity);
    this.jewelsArray = selectedJewels;

    //Initialize Tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();
  }

  // DESCRIPTION :
  //  DEBUG
  // PARAMETERS  :
  //  selectedEquipment - the selected equipment (E.g. "Frostwing Greatsword", "Venom Blade")
  equipmentSelected(selectedEquipment: IEquipment)
  {
    //DEBUG
    console.log("SELECTED EQUIPMENT", selectedEquipment);

    for(let i = 0; i < this.equipmentSlotList.length; i++)
    {
      if (this.equipmentSlotList[i].type === selectedEquipment.type)
      {
        if (this.equipmentSlotList[i].slotName === this.slotName)
        {
          this.equipmentSlotList[i].currentEquipment = selectedEquipment;
          break;
        }
      }
    }
  }

  // DESCRIPTION :
  //  DEBUG
  // PARAMETERS  :
  //  selectedJewel - the selected equipment (E.g. "Infantry Attack Jewel", "Champion Jewel")
  jewelSelected(selectedJewel: IEquipment)
  {
    //DEBUG
    console.log("SELECTED JEWEL", selectedJewel);

    for(let i = 0; i < this.equipmentSlotList.length; i++)
    {
      if (this.equipmentSlotList[i].slotName === this.slotName)
      {
        //Check if any sockets are empty
        if (this.equipmentSlotList[i].currentJewel1.imgPath == "")
        {
          this.equipmentSlotList[i].currentJewel1 = selectedJewel;
        }
        else if (this.equipmentSlotList[i].currentJewel2.imgPath == "")
        {
          this.equipmentSlotList[i].currentJewel2 = selectedJewel;
        }
        else if (this.equipmentSlotList[i].currentJewel3.imgPath == "")
        {
          this.equipmentSlotList[i].currentJewel3 = selectedJewel;
        }

        //Start overriding?
        //Check for duplicates
        //Honestly just make it a click on that box. This is clunky
        break;
      }
    }
  }
}