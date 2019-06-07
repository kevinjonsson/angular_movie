import { Injectable } from '@angular/core';
import { IData } from '../interfaces/IData';
import { Observable, of } from 'rxjs';
import { ICartProduct } from '../interfaces/ICartProducts';
import { IOrder } from '../interfaces/IOrder';
import { IDataService} from '../interfaces/IDataService'
import { ICategorys } from '../interfaces/ICategorys';
@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {
  
  products: IData[] = [{ id: 1, name: 'Dark night', description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018', productCategory:[{categoryId:8,category:null}]}, 
  { id: 2, name: 'Forest gump', description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018', productCategory:[{categoryId:8,category:null}]}];

  product: IData = { id: 2, name: 'Forest gump', description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018', productCategory:[{categoryId:8,category:null}]};

  productsWithAmount: ICartProduct[] = [{movie: {id: 77, name: "Interstellar", description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018',productCategory:[{categoryId:8,category:null}]}, amount: 2}, 
  {movie: {id: 77, name: "Dark", description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018',productCategory:[{categoryId:8,category:null}]}, amount: 1}];

  orders: IOrder[] = [{companyId:0,created:"0001-01-01T00:00:00",createdBy:"null",paymentMethod:"null",totalPrice:0,status:0,orderRows:[]},
  {companyId:0,created:"0001-01-01T00:00:00",createdBy:"null",paymentMethod:"null",totalPrice:0,status:0,orderRows:[]}];

  order: IOrder = {companyId:0,created:"0001-01-01T00:00:00",createdBy:"null",paymentMethod:"null",totalPrice:0,status:0,orderRows:[]}

  categorys: ICategorys[] = [{id:5,name:"Action"},{id:6,name:"Thriller"},{id:7,name:"Comedy"},{id:8,name:"Sci-fi"}];

  constructor() {}

  getData(): Observable<IData[]> {
    return of(this.products);
  }

  getProductData(myId): Observable <IData> {
    return of(this.product);
  }

  getOrders(): Observable<IOrder[]> {
    return of(this.orders);
  }

  postOrders(): Observable<IOrder> {
    return of(this.order);
  }

  getproductsWithAmount(): Observable <ICartProduct[]>{
    return of(this.productsWithAmount);
  }

  getCategorys(): Observable<ICategorys[]> {
    return of(this.categorys);
  }

  getSearch(): Observable<any>{
    return of(this.product);
  }
}
