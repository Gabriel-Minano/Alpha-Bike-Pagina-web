import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SITE } from '../../core/site.config';
import { whatsappUrl } from '../../core/whatsapp';
import { Icon, IconName } from '../../shared/icon/icon';

interface FooterLink {
  readonly label: string;
  readonly commands: readonly string[];
}

interface SocialLink {
  readonly label: string;
  readonly icon: IconName;
  readonly url: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly address = SITE.address;
  protected readonly phone = SITE.phoneLabel;
  protected readonly phoneHref = SITE.phoneHref;

  protected readonly products: readonly FooterLink[] = [
    { label: 'Bicicletas de Montaña', commands: ['/bicicletas', 'montana'] },
    { label: 'Bicicletas de Ruta', commands: ['/bicicletas', 'ruta'] },
    { label: 'Bicicletas Eléctricas', commands: ['/bicicletas', 'electricas'] },
    { label: 'Accesorios', commands: ['/accesorios'] },
  ];

  protected readonly services: readonly FooterLink[] = [
    { label: 'Mantenimiento', commands: ['/servicios', 'mantenimiento'] },
    { label: 'Reparaciones', commands: ['/servicios', 'reparaciones'] },
    { label: 'Personalización', commands: ['/servicios', 'personalizacion'] },
    { label: 'Consultoría', commands: ['/servicios', 'consultoria'] },
  ];

  protected readonly schedule: readonly string[] = [
    'Lunes - Viernes: 8:00 am - 8:00 pm',
    'Sábado: 8:00 am - 8:00 pm',
  ];

  // TODO: reemplazar por las URLs reales de las redes de Alpha Bike
  protected readonly social: readonly SocialLink[] = [
    { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/' },
    { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/' },
    { label: 'Twitter', icon: 'twitter', url: 'https://twitter.com/' },
    { label: 'WhatsApp', icon: 'message-circle', url: whatsappUrl() },
  ];
}
