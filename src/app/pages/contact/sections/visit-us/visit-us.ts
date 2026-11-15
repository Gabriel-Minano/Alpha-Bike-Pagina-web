import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SITE } from '../../../../core/site.config';
import { ContactItem } from '../../components/contact-item/contact-item';

@Component({
  selector: 'app-visit-us',
  imports: [ContactItem],
  templateUrl: './visit-us.html',
  styleUrl: './visit-us.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitUs {
  protected readonly site = SITE;
  protected readonly phoneLines = [SITE.phoneLabel];

  /**
   * Angular exige marcar como "seguras" las URLs de iframe. Es una constante propia
   * (SITE.mapEmbedUrl), nunca texto escrito por el usuario, por lo que es seguro.
   */
  protected readonly mapSrc = inject(DomSanitizer).bypassSecurityTrustResourceUrl(SITE.mapEmbedUrl);
}
