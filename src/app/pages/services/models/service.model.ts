import { IconName } from '../../../shared/icon/icon';

export interface Service {
  /** Se usa en la URL: /servicios/:slug */
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
  readonly image: string;
  readonly imageAlt: string;
}
