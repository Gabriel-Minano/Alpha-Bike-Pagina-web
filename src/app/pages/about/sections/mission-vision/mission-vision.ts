import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconName } from '../../../../shared/icon/icon';
import { MissionVisionCard } from '../../components/mission-vision-card/mission-vision-card';

interface MissionVisionItem {
  /** Encabezado opcional sobre la tarjeta (en el diseño solo aparece "VISIÓN") */
  readonly heading?: string;
  readonly theme: 'blue' | 'teal';
  readonly icon: IconName;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly tags: readonly string[];
}

@Component({
  selector: 'app-mission-vision',
  imports: [MissionVisionCard],
  templateUrl: './mission-vision.html',
  styleUrl: './mission-vision.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionVision {
  protected readonly items: readonly MissionVisionItem[] = [
    {
      theme: 'blue',
      icon: 'target',
      title: 'Misión',
      paragraphs: [
        'Satisfacer y fidelizar a nuestros clientes, ofreciendo productos funcionales y enfocados en las necesidades de cada persona. Brindamos servicios de venta y mantenimiento de la mejor calidad, asegurando confianza y compromiso en cada atención.',
      ],
      tags: ['Calidad', 'Confianza', 'Compromiso'],
    },
    {
      heading: 'VISIÓN',
      theme: 'teal',
      icon: 'eye',
      title: 'Visión',
      paragraphs: [
        'Implementar nuevas tecnologías para llegar a más público que requiera nuestros servicios, con ventas en línea y una gestión de pedidos más automatizada.',
        'Ampliaremos los servicios en línea a partir de la calidad de nuestros productos y atención.',
      ],
      tags: ['Tecnología', 'Mayor alcance', 'Servicios en línea'],
    },
  ];
}
