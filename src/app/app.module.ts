import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EquipmentSelectComponent } from './equipment-select/equipment-select.component';
import { EquipmentSimulatorComponent } from './routing/equipment-simulator/equipment-simulator.component';
import { HomeComponent } from './routing/home/home.component';
import { GuidesComponent } from './routing/guides/guides.component';
import { FaqComponent } from './routing/faq/faq.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { BuildsBenchmarksComponent } from './routing/builds-benchmarks/builds-benchmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EquipmentSelectComponent,
    EquipmentSimulatorComponent,
    HomeComponent,
    GuidesComponent,
    FaqComponent,
    FeatureCardComponent,
    BuildsBenchmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
