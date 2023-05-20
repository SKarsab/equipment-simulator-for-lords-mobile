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
import { P424WarOfWondersComponent } from './routing/p424-war-of-wonders/p424-war-of-wonders.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';

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
    NotFoundComponent
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
