import { ChangeDetectionStrategy, Component } from '@angular/core';

import { whatsappUrl } from '../../../../core/whatsapp';

interface Step {
  readonly number: string;
  readonly title: string;
  readonly text: string;
}

@Component({
  selector: 'app-request-steps',
  templateUrl: './request-steps.html',
  styleUrl: './request-steps.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestSteps {
  protected readonly steps: readonly Step[] = [
    {
      number: '01',
      title: 'Cuéntanos',
      text: 'Escríbenos por WhatsApp y dinos qué necesita tu bicicleta',
    },
    {
      number: '02',
      title: 'Te orientamos',
      text: 'Revisamos tu caso y coordinamos cuándo puedes visitarnos',
    },
    {
      number: '03',
      title: 'Vuelve a rodar',
      text: 'Nuestro equipo se encarga de dejarla lista para la ruta',
    },
  ];

  protected readonly whatsappHref = whatsappUrl(
    'Hola, quisiera consultar por un servicio de Alpha Bike.',
  );
}
