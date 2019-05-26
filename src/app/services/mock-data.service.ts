import { Injectable } from '@angular/core';
import { IData } from '../interfaces/IData';
import { Observable, of } from 'rxjs';
import { ICartProduct } from '../interfaces/ICartProducts';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  
  products: IData[] = [{ id: 1, name: 'Dark night', description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018' }, 
  { id: 2, name: 'Forest gump', description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018' }];

  product: IData = { id: 2, name: 'Forest gump', description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018' };

  productsWithAmount: ICartProduct[] = [{movie: {id: 77, name: "Interstellar", description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018'}, amount: 2}, 
  {movie: {id: 77, name: "Dark", description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018'}, amount: 1}];

  constructor() { }

  getData(): Observable<IData[]> {
    return of(this.products);
  }

  getProductData(myId): Observable <IData> {
    return of(this.product);
  }

  getproductsWithAmount(): Observable <ICartProduct[]>{
    return of(this.productsWithAmount);
  }
}
