import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Auth } from './components/auth/auth';
import { guestGuard } from './guards/guest-guard';
import { authGuard } from './guards/auth-guard';
import { AppLayout } from './layout/component/app.layout';

export const routes: Routes = [
    {
        path: "",
        component: AppLayout,
        children: [
            {
                path: "login",
                component: Auth,
                canActivate: [guestGuard]
            },
            {
                path: "home",
                component: Products,
                canActivate: [authGuard]
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]
    }
];
