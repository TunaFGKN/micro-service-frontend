import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    {
        path: "login",
        component: Login
    },
    {
        path: "",
        component: Layout,
        children: [
            {
                path: "",
                component: Home
            },
            {
                path: "home",
                component: Home
            },
            {
                path: "about",
                component: About
            },
            {
                path: "contact",
                component: Contact
            },
            {
                path: "contact/:params",
                component: Contact
            }
        ]
    } 
];
