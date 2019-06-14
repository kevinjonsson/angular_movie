import { Observable } from "rxjs";
import { IData } from "./IData";
import { IOrder } from './IOrder';
import { ICategories } from './ICategories';

export interface IDataService {
  getData(): Observable<IData[]>;
  getOrders(): Observable<IOrder[]>;
  getProductData(myId): Observable<IData>;
  postOrders(newOrder): Observable<IOrder>;
  getCategories(): Observable<ICategories[]>;
  getSearch(search): Observable<IData[]>;
  deleteOrder(id): Observable<IOrder>;
}
