import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MovieShopComponent } from './components/movie-shop/movie-shop.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
{ path: 'shopping-cart', component: ShoppingCartComponent },
{ path: 'details/:id', component: DetailsComponent },
{ path: '', component: MovieShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
