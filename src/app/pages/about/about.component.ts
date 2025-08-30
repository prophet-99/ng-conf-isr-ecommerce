import { Component } from '@angular/core';

import {
  BreadcrumbComponent,
  FooterComponent,
  HeaderComponent,
  PromotionalBarComponent,
} from '@core/components';
import { MainLayoutComponent } from '@core/layouts';

import {
  HeroSectionComponent,
  MissionVisionComponent,
  StoryComponent,
  TeamComponent,
  ValuesComponent,
} from './components';

const IMPORTS = [
  MainLayoutComponent,
  PromotionalBarComponent,
  HeaderComponent,
  BreadcrumbComponent,
  FooterComponent,
  HeroSectionComponent,
  MissionVisionComponent,
  ValuesComponent,
  StoryComponent,
  TeamComponent,
];

@Component({
  selector: 'app-about',
  imports: [...IMPORTS],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
