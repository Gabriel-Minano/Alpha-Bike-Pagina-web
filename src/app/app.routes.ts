import { Routes } from '@angular/router';

const loadBikes = () => import('./pages/bikes/bikes').then((m) => m.Bikes);

export const routes: Routes = [
  {
    path: '',
    title: 'Alpha Bike | Inicio',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },

  {
    path: 'nosotros',
    title: 'Alpha Bike | Nosotros',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },

  // Catálogo: /bicicletas  ·  /bicicletas/montana  ·  /bicicletas?q=trail
  { path: 'bicicletas', title: 'Alpha Bike | Bicicletas', loadComponent: loadBikes },
  { path: 'bicicletas/:categoria', title: 'Alpha Bike | Bicicletas', loadComponent: loadBikes },

  // TODO: agregar aquí las demás páginas a medida que se desarrollen:
  // { path: 'accesorios', loadComponent: () => ... },
  // { path: 'servicios',  loadComponent: () => ... },
  // { path: 'contacto',   loadComponent: () => ... },

  // Mientras no existan, cualquier otra ruta vuelve al inicio.
  { path: '**', redirectTo: '' },
];
