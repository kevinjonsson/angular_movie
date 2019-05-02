import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataService } from '../interfaces/IDataService';
import { Observable } from 'rxjs';
import { IData } from '../interfaces/IData';

@Injectable({
  providedIn: 'root'
})

export class DataService implements IDataService {
  constructor(private http: HttpClient) { }

  getData(): Observable<IData[]> {
    return this.http.get<IData[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }
}