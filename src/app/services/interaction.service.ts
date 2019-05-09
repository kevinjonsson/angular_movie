import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private cartItemSource = new Subject<boolean>();
  cartItem$ = this.cartItemSource.asObservable();

  constructor() { }

  sendCartItem(item: boolean){
    this.cartItemSource.next(item);
  }
}
