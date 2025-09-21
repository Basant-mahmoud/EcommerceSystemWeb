import { Routes } from '@angular/router';
import {Cart} from './components/cart/cart';
import {ProductDetails} from './components/product-details/product-details';
import {ProductCards} from './components/product-cards/product-cards';
import {Products} from './components/products/products';
import {Home} from './components/home/home';
import {About} from './components/about/about';
import {Contact} from './components/contact/contact';
import {Notfound} from './components/notfound/notfound';
import {Register} from './components/Forms/register/register';
import {Login} from './components/Forms/login/login';
import {guestGuard} from './guards/guest-guard';
import {authGuardGuard} from './guards/auth-guard-guard';

export const routes: Routes = [
  {path:"cart",component: Cart, canActivate:[authGuardGuard]},
  {path:"productcards",component: ProductCards},
  {path:'register', component:Register, canActivate: [guestGuard]},
  {path:'login', component:Login ,canActivate: [guestGuard]},
  {path:"productdetails/:id",component:ProductDetails},
  {path:"products", component:Products, canActivate: [authGuardGuard]},
  {path:"home", component:Home},
  {path:"about", component:About},
  {path:"contact", component:Contact},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'**', component:Notfound},
];
