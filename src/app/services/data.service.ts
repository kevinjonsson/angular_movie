import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataService } from '../interfaces/IDataService';
import { Observable } from 'rxjs';
import { IData } from '../interfaces/IData';
import { IOrder } from '../interfaces/IOrder';
import { ICategorys } from '../interfaces/ICategorys';

@Injectable({
  providedIn: 'root'
})

export class DataService implements IDataService {
    constructor(private http: HttpClient) { }

    getData(): Observable<IData[]> {
    return this.http.get<IData[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  getProductData(myId): Observable<IData> {
    return this.http.get<IData>('https://medieinstitutet-wie-products.azurewebsites.net/api/products/'+myId);
  }

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=21');
  }

  postOrders(newOrder): Observable<IOrder> {
    return this.http.post<IOrder>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders',newOrder);
  }

  getCategorys(): Observable<ICategorys[]> {
    return this.http.get<ICategorys[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
  }

  getSearch(search): Observable<any>{
    return this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/search?='+search);
  }

  deleteOrder(id:number): Observable<any>{
    return this.http.delete<IOrder>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders' + '/' + id);
  }

}