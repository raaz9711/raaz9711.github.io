import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'blog',
        loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path:'about'
        , loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
    }
];
