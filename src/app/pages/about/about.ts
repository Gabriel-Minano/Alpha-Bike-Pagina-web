import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageBanner } from '../../shared/page-banner/page-banner';
import { AboutIntro } from './sections/about-intro/about-intro';
import { ValueProposition } from './sections/value-proposition/value-proposition';
import { ExperienceBand } from './sections/experience-band/experience-band';
import { MissionVision } from './sections/mission-vision/mission-vision';

@Component({
  selector: 'app-about',
  imports: [PageBanner, AboutIntro, ValueProposition, ExperienceBand, MissionVision],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {}
