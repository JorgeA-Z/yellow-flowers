import { Routes } from '@angular/router';
import { NotFound } from './utils/pages/not-found/not-found';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/app.routes').then((m) => m.homeRoutes)
    },
    {
        path: 'not-found',
        component: NotFound,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },

];
