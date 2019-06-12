import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MovieShopComponent } from './components/movie-shop/movie-shop.component';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component'
import { AdminComponent } from './components/admin/admin.component';
import { ShoppingCartFullsizeComponent } from './components/shopping-cart-fullsize/shopping-cart-fullsize.component';

const routes: Routes = [
{ path: 'shopping-cart', component: ShoppingCartComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'shopping-cart-full', component: ShoppingCartFullsizeComponent },
{ path: 'details/:id', component: DetailsComponent },
{ path: 'checkout', component: CheckoutComponent },
{ path: '', component: MovieShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
