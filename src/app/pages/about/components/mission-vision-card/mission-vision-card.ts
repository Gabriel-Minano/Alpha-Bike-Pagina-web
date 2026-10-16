import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Icon, IconName } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-mission-vision-card',
  imports: [Icon],
  templateUrl: './mission-vision-card.html',
  styleUrl: './mission-vision-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionVisionCard {
  /** 'blue' = cabecera azul oscuro (misión) · 'teal' = cabecera turquesa (visión) */
  readonly theme = input<'blue' | 'teal'>('blue');
  readonly icon = input.required<IconName>();
  readonly eyebrow = input('Alpha Bike');
  readonly title = input.required<string>();
  readonly paragraphs = input.required<readonly string[]>();
  readonly tags = input<readonly string[]>([]);
}
