import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE } from '../../../../core/site.config';
import { Avatar } from '../../../../shared/avatar/avatar';
import { Carousel } from '../../../../shared/carousel/carousel';
import { ReviewCard } from '../../components/review-card/review-card';
import { REVIEWS, VISIBLE_REVIEWS } from '../../data/reviews.data';

interface GalleryPhoto {
  readonly image: string;
  readonly alt: string;
}

@Component({
  selector: 'app-reviews',
  imports: [Avatar, Carousel, ReviewCard],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reviews {
  /** "Ver más" lleva a Google Maps, donde el cliente puede leer todas las reseñas */
  protected readonly moreUrl = SITE.mapsUrl;

  protected readonly visibleReviews = REVIEWS.slice(0, VISIBLE_REVIEWS);

  /** Avatares junto al título y "+N" con el resto de reseñas */
  protected readonly reviewers = REVIEWS.slice(0, 3);
  protected readonly extraReviewers = Math.max(0, REVIEWS.length - this.reviewers.length);

  // Fotos provisionales: reemplázalas por las del taller (public/images/)
  protected readonly gallery: readonly GalleryPhoto[] = [
    { image: 'images/gallery-taller-1.jpg', alt: 'Mecánico ajustando una bicicleta naranja junto a un estuche de herramientas' },
    { image: 'images/gallery-taller-2.jpg', alt: 'Técnico revisando con atención el cuadro de una bicicleta' },
    { image: 'images/service-reparaciones.jpg', alt: 'Mano aplicando lubricante a la cadena de una bicicleta' },
    { image: 'images/service-mantenimiento.jpg', alt: 'Mecánico con guantes rojos armando un cassette sobre una rueda' },
  ];
}
