import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IData } from '../interfaces/IData';
import { ICartProduct } from '../interfaces/ICartProducts';
import { IOrder } from '../interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private cartItemsSource = new Subject<ICartProduct[]>();
  cartItems$ = this.cartItemsSource.asObservable();

  private cartMovie = new Subject<any>();
  cartMovie$ = this.cartMovie.asObservable();

  constructor() { }

  sendCartItem(items: ICartProduct[]){
    console.log(items)
    this.cartItemsSource.next(items);
  }

  sendCartProduct(movie: IData){
    this.cartMovie.next(movie);
  }
}
