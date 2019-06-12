import { Observable } from "rxjs";
import { IData } from "./IData";
import { IOrder } from './IOrder';
import { ICategorys } from './ICategorys';

export interface IDataService {
  getData(): Observable<IData[]>;
  getOrders(): Observable<IOrder[]>;
  getProductData(myId): Observable<IData>;
  postOrders(newOrder): Observable<IOrder>;
  getCategorys(): Observable<ICategorys[]>;
  getSearch(search): Observable<any>;
  deleteOrder(id:number): Observable<any>;
}
