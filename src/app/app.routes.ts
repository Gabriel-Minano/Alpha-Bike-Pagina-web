import { Routes } from '@angular/router';

const loadBikes = () => import('./pages/bikes/bikes').then((m) => m.Bikes);

const loadAccessories = () => import('./pages/accessories/accessories').then((m) => m.Accessories);

const loadServices = () => import('./pages/services/services').then((m) => m.Services);

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

  // Servicios: /servicios  ·  /servicios/reparaciones (abre con ese servicio destacado)
  { path: 'servicios', title: 'Alpha Bike | Servicios', loadComponent: loadServices },
  { path: 'servicios/:servicio', title: 'Alpha Bike | Servicios', loadComponent: loadServices },

  // TODO: agregar aquí las demás páginas a medida que se desarrollen:
  // { path: 'contacto',   loadComponent: () => ... },

  // Mientras no existan, cualquier otra ruta vuelve al inicio.
  { path: '**', redirectTo: '' },
];
