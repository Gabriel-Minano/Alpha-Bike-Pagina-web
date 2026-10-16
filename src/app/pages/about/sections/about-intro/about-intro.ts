import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Carousel } from '../../../../shared/carousel/carousel';

interface IntroSlide {
  readonly title: string;
  readonly image: string;
  readonly alt: string;
  readonly paragraphs: readonly string[];
}

@Component({
  selector: 'app-about-intro',
  imports: [Carousel],
  templateUrl: './about-intro.html',
  styleUrl: './about-intro.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutIntro {
  // Agrega más slides aquí para activar el desplazamiento del carrusel.
  protected readonly slides: readonly IntroSlide[] = [
    {
      title: '¿Qué ofrecemos?',
      image: 'images/about-workshop.jpg',
      alt: 'Técnico de Alpha Bike sentado en el taller, rodeado de herramientas y repuestos',
      paragraphs: [
        '“En AlphaBike nos apasiona el ciclismo y trabajamos para que disfrutes cada pedaleada”',
        'Ofrecemos mantenimiento integral de bicicleta, instalación de accesorios, venta de repuesto de calidad y asesoría personalizada.',
        'Nuestro compromiso es mantener tu bici en tus mejores condiciones para que ruede seguro y con confianza',
      ],
    },
  ];
}
