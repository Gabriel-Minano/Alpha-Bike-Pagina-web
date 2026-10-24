import { Routes } from '@angular/router';

const loadBikes = () => import('./pages/bikes/bikes').then((m) => m.Bikes);

const loadAccessories = () => import('./pages/accessories/accessories').then((m) => m.Accessories);

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

  // Accesorios: /accesorios  ·  /accesorios/luces  ·  /accesorios?q=casco
  { path: 'accesorios', title: 'Alpha Bike | Accesorios', loadComponent: loadAccessories },
  { path: 'accesorios/:categoria', title: 'Alpha Bike | Accesorios', loadComponent: loadAccessories },

  // TODO: agregar aquí las demás páginas a medida que se desarrollen:
  // { path: 'servicios',  loadComponent: () => ... },
  // { path: 'contacto',   loadComponent: () => ... },

  // Mientras no existan, cualquier otra ruta vuelve al inicio.
  { path: '**', redirectTo: '' },
];
