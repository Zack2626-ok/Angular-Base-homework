import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { About } from './about/about';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Stories } from './pages/stories/stories';

export const routes: Routes = [
  { path: 'contact', component: Contact },
  { path: 'about', component: About },
  { path: 'products', component: Products },
  { path: 'products/:slug', component: ProductDetail },
  { path: 'stories', component: Stories },
];
