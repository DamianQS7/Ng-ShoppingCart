import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'groceries',
        loadComponent: () => import('./pages/groceries/groceries.component')
    },
    {
        path: '',
        redirectTo: '/groceries',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/groceries'
    }
];
