import { Observable } from "rxjs";
import { IData } from "./IData";

export interface IDataService {
  getData(): Observable<IData[]>;
}
