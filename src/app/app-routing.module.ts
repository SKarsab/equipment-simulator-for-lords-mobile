import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipmentSimulatorComponent } from './routing/equipment-simulator/equipment-simulator.component';
import { BuildsBenchmarksComponent } from './routing/builds-benchmarks/builds-benchmarks.component';
import { HomeComponent } from './routing/home/home.component';
import { GuidesComponent } from './routing/guides/guides.component';
import { FaqComponent } from './routing/faq/faq.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { P424WarOfWondersComponent } from './routing/builds/p424-war-of-wonders/p424-war-of-wonders.component';
import { B442WarOfWondersComponent } from './routing/builds/b442-war-of-wonders/b442-war-of-wonders.component';
import { B244WarOfWondersComponent } from './routing/builds/b244-war-of-wonders/b244-war-of-wonders.component';
import { B111WarOfWondersComponent } from './routing/builds/b111-war-of-wonders/b111-war-of-wonders.component';
import { B505MultiPurposeComponent } from './routing/builds/b505-multi-purpose/b505-multi-purpose.component';
import { B100InfantryBlastComponent } from './routing/builds/b100-infantry-blast/b100-infantry-blast.component';
import { B010RangedBlastComponent } from './routing/builds/b010-ranged-blast/b010-ranged-blast.component';
import { B001CavalryBlastComponent } from './routing/builds/b001-cavalry-blast/b001-cavalry-blast.component';
import { B100InfantryBudgetBlastComponent } from './routing/builds/b100-infantry-budget-blast/b100-infantry-budget-blast.component';
import { B010RangedBudgetBlastComponent } from './routing/builds/b010-ranged-budget-blast/b010-ranged-budget-blast.component';
import { B001CavalryBudgetBlastComponent } from './routing/builds/b001-cavalry-budget-blast/b001-cavalry-budget-blast.component';
import { B111DefenseRalliesComponent } from './routing/builds/b111-defense-rallies/b111-defense-rallies.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'equipment-simulator', component: EquipmentSimulatorComponent },
    { path: 'builds-benchmarks', component: BuildsBenchmarksComponent },
    { path: 'builds-benchmarks', children: [
        { path: 'builds/B424-war-of-wonders', component: P424WarOfWondersComponent },
        { path: 'builds/B442-war-of-wonders', component: B442WarOfWondersComponent },
        { path: 'builds/B244-war-of-wonders', component: B244WarOfWondersComponent },
        { path: 'builds/B111-war-of-wonders', component: B111WarOfWondersComponent },
        { path: 'builds/B505-multi-purpose', component: B505MultiPurposeComponent },
        { path: 'builds/B100-infantry-blast', component: B100InfantryBlastComponent },
        { path: 'builds/B010-ranged-blast', component: B010RangedBlastComponent },
        { path: 'builds/B001-cavalry-blast', component: B001CavalryBlastComponent },
        { path: 'builds/B111-defense-rallies', component: B111DefenseRalliesComponent },
        { path: 'builds/B100-infantry-budget-blast', component: B100InfantryBudgetBlastComponent },
        { path: 'builds/B010-ranged-budget-blast', component: B010RangedBudgetBlastComponent },
        { path: 'builds/B001-cavalry-budget-blast', component: B001CavalryBudgetBlastComponent }
    ]},
    { path: 'guides', component: GuidesComponent },
    { path: 'faq', component: FaqComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }