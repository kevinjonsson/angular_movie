import { IProductCategory } from './IProductCategory';

export interface IData {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  added: string;
  productCategory: IProductCategory[];
}