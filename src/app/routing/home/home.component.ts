import { Component } from '@angular/core';
import { Feature } from '../../feature-card/feature.model';
import { SIMULATOR_ROUTE, BENCHMARKS_ROUTE, GUIDES_ROUTE } from '../../../utilities/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features: Feature[] = [
    new Feature('Equipment Simulator', 'Our equipment simulator is available to help players from those just getting started, to veterans looking to theory craft new sets. Optimize your equipment choices to ensure maximum potential in every encounter.', true, 'https://unsplash.it/500/200', '#ce5904', SIMULATOR_ROUTE),
    new Feature('Builds and Benchmarks', 'Our collection of meta builds and benchmarks are here to help players gauge their account against players of all levels. Learn why players wear what equipment and jewels, and when the competition is just too powerful to beat.', false, 'https://unsplash.it/500/200', '#04b6ce', BENCHMARKS_ROUTE),
    new Feature('Guides', 'With a growing collection of Lords Mobile strategy guides, learn how to crush your opponents with the best possible decision in every encounter. Lean how to properly assemble you gear, attack, and defend from all kinds of opponents.', true, 'https://unsplash.it/500/200', '#ca04ce', GUIDES_ROUTE)
  ];
}