import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon, IconName } from '../../../../shared/icon/icon';

interface ValueItem {
  readonly icon: IconName;
  readonly text: string;
}

@Component({
  selector: 'app-value-proposition',
  imports: [Icon],
  templateUrl: './value-proposition.html',
  styleUrl: './value-proposition.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValueProposition {
  protected readonly items: readonly ValueItem[] = [
    { icon: 'clock', text: 'Pedidos en menos de 24 horas' },
    { icon: 'map-pin', text: 'Proveedores Internacionales' },
    { icon: 'thumbs-up', text: 'Reputación Local' },
  ];
}
