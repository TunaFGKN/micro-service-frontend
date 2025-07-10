import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Auth } from './components/auth/auth';


export const routes: Routes = [
    {
        path: "",
        component: Products
    },
    {
        path: "login",
        component: Auth
    }
];
