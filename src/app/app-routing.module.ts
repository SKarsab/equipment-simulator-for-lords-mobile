import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipmentSimulatorComponent } from './routing/equipment-simulator/equipment-simulator.component';
import { BuildsBenchmarksComponent } from './routing/builds-benchmarks/builds-benchmarks.component';
import { HomeComponent } from './routing/home/home.component';
import { GuidesComponent } from './routing/guides/guides.component';
import { FaqComponent } from './routing/faq/faq.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'equipment-simulator', component: EquipmentSimulatorComponent },
    { path: 'builds-benchmarks', component: BuildsBenchmarksComponent },
    { path: 'guides', component: GuidesComponent },
    { path: 'faq', component: FaqComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }