import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { About } from './about/about';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import { AddProducts } from './pages/add-products/add-products';
import { Register } from './pages/register/register';

export const routes: Routes = [
  { path: 'contact', component: Contact },
  { path: 'about', component: About },
  { path: 'products', component: Products },
  { path: 'products/:slug', component: ProductDetail },
  { path: 'stories', component: Stories },
  { path: 'add', component: AddStory },
  { path: 'addPro', component: AddProducts },
  { path: 'register', component: Register },
];
