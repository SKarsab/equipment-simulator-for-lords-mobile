import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipmentSimulatorComponent } from './routing/equipment-simulator/equipment-simulator.component';
import { HomeComponent } from './routing/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'equipment-simulator', component: EquipmentSimulatorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }