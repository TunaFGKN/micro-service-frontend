import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Auth } from './components/auth/auth';
import { guestGuard } from './guards/guest-guard';
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
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
];
