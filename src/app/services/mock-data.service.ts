import { Injectable } from '@angular/core';
import { IData } from '../interfaces/IData';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  
  movies: IData[] = [{ id: 1, name: 'Dark night', description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018' }, 
  { id: 2, name: 'Forest gump', description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018' }];

  constructor() { }

  getData(): IData[] {
    return this.movies;
  }
}
