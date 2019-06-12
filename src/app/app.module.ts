import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MoviePresentationComponent } from './components/movie-presentation/movie-presentation.component';
import { MovieShopComponent } from './components/movie-shop/movie-shop.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartFullsizeComponent } from './components/shopping-cart-fullsize/shopping-cart-fullsize.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviePresentationComponent,
    MovieShopComponent,
    ShoppingCartComponent,
    DetailsComponent,
    CheckoutComponent,
    AdminComponent,
    ShoppingCartFullsizeComponent,
    ModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
