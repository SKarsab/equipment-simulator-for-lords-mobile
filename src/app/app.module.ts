import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EquipmentSimulatorComponent } from './routing/equipment-simulator/equipment-simulator.component';
import { HomeComponent } from './routing/home/home.component';
import { GuidesComponent } from './routing/guides/guides.component';
import { FaqComponent } from './routing/faq/faq.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { BuildsBenchmarksComponent } from './routing/builds-benchmarks/builds-benchmarks.component';
import { EquipmentSlotComponent } from './equipment-slot/equipment-slot.component';
import { BuildCardComponent } from './build-card/build-card.component';
import { P424WarOfWondersComponent } from './routing/builds/p424-war-of-wonders/p424-war-of-wonders.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { EquipmentSlotPreviewComponent } from './equipment-slot-preview/equipment-slot-preview.component';
import { B442WarOfWondersComponent } from './routing/builds/b442-war-of-wonders/b442-war-of-wonders.component';
import { B244WarOfWondersComponent } from './routing/builds/b244-war-of-wonders/b244-war-of-wonders.component';
import { B111WarOfWondersComponent } from './routing/builds/b111-war-of-wonders/b111-war-of-wonders.component';
import { B505MultiPurposeComponent } from './routing/builds/b505-multi-purpose/b505-multi-purpose.component';
import { B100InfantryBlastComponent } from './routing/builds/b100-infantry-blast/b100-infantry-blast.component';
import { B010RangedBlastComponent } from './routing/builds/b010-ranged-blast/b010-ranged-blast.component';
import { B001CavalryBlastComponent } from './routing/builds/b001-cavalry-blast/b001-cavalry-blast.component';
import { B001CavalryBudgetBlastComponent } from './routing/builds/b001-cavalry-budget-blast/b001-cavalry-budget-blast.component';
import { B100InfantryBudgetBlastComponent } from './routing/builds/b100-infantry-budget-blast/b100-infantry-budget-blast.component';
import { B010RangedBudgetBlastComponent } from './routing/builds/b010-ranged-budget-blast/b010-ranged-budget-blast.component';
import { B111DefenseRalliesComponent } from './routing/builds/b111-defense-rallies/b111-defense-rallies.component';
import { QuestionComponent } from './question/question.component';
import { GuideCardComponent } from './guide-card/guide-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EquipmentSimulatorComponent,
    HomeComponent,
    GuidesComponent,
    FaqComponent,
    FeatureCardComponent,
    BuildsBenchmarksComponent,
    EquipmentSlotComponent,
    BuildCardComponent,
    P424WarOfWondersComponent,
    NotFoundComponent,
    EquipmentSlotPreviewComponent,
    B442WarOfWondersComponent,
    B244WarOfWondersComponent,
    B111WarOfWondersComponent,
    B505MultiPurposeComponent,
    B100InfantryBlastComponent,
    B010RangedBlastComponent,
    B001CavalryBlastComponent,
    B001CavalryBudgetBlastComponent,
    B100InfantryBudgetBlastComponent,
    B010RangedBudgetBlastComponent,
    B111DefenseRalliesComponent,
    QuestionComponent,
    GuideCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
