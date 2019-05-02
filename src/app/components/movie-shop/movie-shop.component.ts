import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IData } from 'src/app/interfaces/IData';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-movie-shop',
  templateUrl: './movie-shop.component.html',
  styleUrls: ['./movie-shop.component.css']
})
export class MovieShopComponent implements OnInit {

  products: IData[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getData().subscribe((data) => { this.products = data; });
  }

}
