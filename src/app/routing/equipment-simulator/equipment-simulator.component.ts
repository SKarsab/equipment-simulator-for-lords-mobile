// PURPOSE : Component instantiates 8 equipment-slot components on the page. When the user clicks on one, data
//           fetched from the backend for that slot, and populates the modal pop up window. When a piece of 
//           equipment is selected from that modal, the selected is communicated back to the child equipment-slot 
//           component to show the selection, and the stats are calculated

import { Component } from '@angular/core';
import { EquipmentSlot } from '../../equipment-slot/equipment-slot.model';
import { defaultEquipmentSlots } from '../../../utilities/equipmentSlots';
import { HOME_ROUTE, BASE_FILE_PATH, MYTHIC, LEGENDARY, JEWEL, MAINHAND, DEFAULT_JEWEL } from '../../../utilities/constants';
import { EquipmentService } from 'src/app/equipment.service';
import { IEquipment } from 'src/interfaces/equipment';
import { IStat } from 'src/interfaces/stat';

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
  stats: IStat[] = [];

  constructor(private equipmentService: EquipmentService) { }

  //DEBUG
  ngOnInit() {
    this.getEquipmentInfo({type: MAINHAND, slotName: MAINHAND});
  }

  // DESCRIPTION :
  //  Fetch all available equipment data from backend for selected slot/type
  // PARAMETERS  :
  //  equipmentSelectEvent - the selected equipment slot/type (E.g. "Helmet", "Chest")
  getEquipmentInfo(equipmentSelectEvent:any)
  {
    this.slotName = equipmentSelectEvent.slotName;
    this.type = equipmentSelectEvent.type;
    this.rarity = MYTHIC;
    this.jewelRarity = LEGENDARY;

    //Fetch equipment
    this.equipmentService.getEquipment(equipmentSelectEvent.type)
      .subscribe(response => this.equipment = response);

    //Fetch jewels
    this.equipmentService.getEquipment(JEWEL)
      .subscribe(response => this.jewels = response);

    this.populateModal();
  }

  // DESCRIPTION :
  //  Populates the equipmentArray and jewelArray with the currently selected equipment 
  //  and rarity for the modal
  populateModal()
  {
    let selectedEquipment: IEquipment[] = this.equipment.filter(equipment => equipment.type === this.type && equipment.rarity === MYTHIC);
    this.equipmentArray = selectedEquipment;
    
    let selectedJewels: IEquipment[] = this.jewels.filter(jewel => jewel.rarity === LEGENDARY);
    this.jewelsArray = selectedJewels;
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
  }

  // DESCRIPTION :
  //  Changes the currently selected equipment in the equipmentSlotList to the one selected in the modal. 
  //  This is communicated to the child component equipmentSlot
  // PARAMETERS  :
  //  selectedEquipment - the selected equipment (E.g. "Frostwing Greatsword", "Venom Blade")
  equipmentSelected(selectedEquipment: IEquipment)
  {
    for(let i = 0; i < this.equipmentSlotList.length; i++)
    {
      if (this.equipmentSlotList[i].type === selectedEquipment.type)
      {
        if (this.equipmentSlotList[i].slotName === this.slotName)
        {
          const defaultImgPath = "/" + this.equipmentSlotList[i].type + ".PNG";

          //If the imgPath for the current piece of equipment isn't default, then stats will have 
          //to be deducted before adding the new piece
          if (this.equipmentSlotList[i].currentEquipment.imgPath !== defaultImgPath)
          {
            this.removeStats(this.equipmentSlotList[i].currentEquipment);
          }

          this.equipmentSlotList[i].currentEquipment = selectedEquipment;
          break;
        }
      }
    }

    this.addStats(selectedEquipment);
  }

  // DESCRIPTION :
  //  Changes the currently selected jewel in the equipmentSlotList to the one selected in the modal. 
  //  This is communicated to the child component equipmentSlot
  // PARAMETERS  :
  //  selectedJewel - the selected equipment (E.g. "Infantry Attack Jewel", "Champion Jewel")
  jewelSelected(selectedJewel: IEquipment)
  {
    for(let i = 0; i < this.equipmentSlotList.length; i++)
    {
      if (this.equipmentSlotList[i].slotName === this.slotName)
      {
        const defaultImgPath = "/" + this.equipmentSlotList[i].type + ".PNG";

        //Check if any sockets are empty
        if (this.equipmentSlotList[i].currentJewel1.imgPath == "")
        {
          //If the imgPath for the current piece of equipment isn't default, then stats will have 
          //to be deducted before adding the new piece
          if (this.equipmentSlotList[i].currentJewel1.imgPath !== defaultImgPath)
          {
            this.removeStats(this.equipmentSlotList[i].currentJewel1);
          }

          this.equipmentSlotList[i].currentJewel1 = selectedJewel;
          this.addStats(selectedJewel);
        }
        else if (this.equipmentSlotList[i].currentJewel2.imgPath == "")
        {
          //If the imgPath for the current piece of equipment isn't default, then stats will have 
          //to be deducted before adding the new piece
          if (this.equipmentSlotList[i].currentJewel2.imgPath !== defaultImgPath)
          {
            this.removeStats(this.equipmentSlotList[i].currentJewel2);
          }

          this.equipmentSlotList[i].currentJewel2 = selectedJewel;
          this.addStats(selectedJewel);
        }
        else if (this.equipmentSlotList[i].currentJewel3.imgPath == "")
        {
          //If the imgPath for the current piece of equipment isn't default, then stats will have 
          //to be deducted before adding the new piece
          if (this.equipmentSlotList[i].currentJewel3.imgPath !== defaultImgPath)
          {
            this.removeStats(this.equipmentSlotList[i].currentJewel3);
          }

          this.equipmentSlotList[i].currentJewel3 = selectedJewel;
          this.addStats(selectedJewel);
        }

        break;
      }
    }
  }

  // DESCRIPTION :
  //  Adds the new equipment or jewel to the stats array. Existing names are added together, 
  //  while new names are pushed to the array
  // PARAMETERS  :
  //  newEquipment - the selected equipment (E.g. "Wyrmbone Coronet", "Infantry Attack Jewel")
  addStats(newEquipment: IEquipment)
  {
    newEquipment.stats.forEach(newStat => 
    {
      if (this.stats.some(existingStat => existingStat.name === newStat.name))
      {
        const index = this.stats.findIndex(existingStat => existingStat.name === newStat.name);
        this.stats[index].value = this.stats[index].value + newStat.value;
      }
      else
      {
        this.stats.push({ name: newStat.name, value: newStat.value });
      }
    })
  }

  // DESCRIPTION :
  //  Removes the old equipment or jewel from the stats array. Existing names are subtracted, 
  //  and if the resulting value is 0, it is removed from the array
  // PARAMETERS  :
  //  oldEquipment - the selected equipment (E.g. "Wyrmbone Coronet", "Infantry Attack Jewel")
  removeStats(oldEquipment: IEquipment)
  {
    oldEquipment.stats.forEach(oldStat => 
    {
      const index = this.stats.findIndex(existingStat => existingStat.name === oldStat.name);
      this.stats[index].value = this.stats[index].value - oldStat.value;

      if (this.stats[index].value == 0)
      {
        this.stats.splice(index, 1);
      }
    })
  }

  // DESCRIPTION :
  //  
  // PARAMETERS  :
  //  removeJewelEvent - 
  removeJewel(removeJewelEvent:any) 
  {
    const index = this.equipmentSlotList.findIndex(equipmentSlot => equipmentSlot.slotName === removeJewelEvent.slotName);
    
    switch (removeJewelEvent.slotNumber)
    {
      case 1:
        this.equipmentSlotList[index].currentJewel1 = DEFAULT_JEWEL;
        break;

      case 2:
        this.equipmentSlotList[index].currentJewel2 = DEFAULT_JEWEL;
        break;

      case 3:
        this.equipmentSlotList[index].currentJewel3 = DEFAULT_JEWEL;
        break;

      default:
        break;
    }

    this.removeStats(removeJewelEvent.jewel);
  }
}