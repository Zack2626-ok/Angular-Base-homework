import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { About } from './about/about';
import { Products } from './pages/products/products';
export const routes: Routes = [
  { path: 'contact', component: Contact },
  { path: 'about', component: About },
  { path: 'products', component: Products },
];
