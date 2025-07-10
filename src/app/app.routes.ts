import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Auth } from './components/auth/auth';
import { guestGuard } from './guards/guest-guard';
import { authGuard } from './guards/auth-guard';
import { AppLayout } from './layout/component/app.layout';
import { Carts } from './components/carts/carts';
import { Orders } from './components/orders/orders';
import { Calendar } from './components/calendar/calendar';

export const routes: Routes = [
    {
        path: "login",
        component: Auth,
        canActivate: [guestGuard]
    },
    {
        path: "",
        component: AppLayout,
        children: [            
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
                path: "carts",
                component: Carts
            },
            {
                path: "orders",
                component: Orders
            },
            {
                path: "products",
                component: Products
            },
            {   path: 'calendar', 
                component: Calendar 
            }
        ]
    }
];  