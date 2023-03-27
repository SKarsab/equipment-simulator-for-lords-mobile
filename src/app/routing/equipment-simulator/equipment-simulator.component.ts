import { Component } from '@angular/core';
import { HOME_ROUTE } from '../../../utilities/constants';

@Component({
  selector: 'app-equipment-simulator',
  templateUrl: './equipment-simulator.component.html',
  styleUrls: ['./equipment-simulator.component.css']
})
export class EquipmentSimulatorComponent {
  HOME_PATH = HOME_ROUTE;
}
