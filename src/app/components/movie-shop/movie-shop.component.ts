import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IData } from 'src/app/interfaces/IData';
import { MockDataService } from 'src/app/services/mock-data.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-movie-shop',
  templateUrl: './movie-shop.component.html',
  styleUrls: ['./movie-shop.component.css']
})
export class MovieShopComponent implements OnInit {

  products: IData[];

  addedItem;

  constructor(private service: DataService, private _interactionService: InteractionService) { }

  ngOnInit() {
    console.log(this.addedItem);
    this.service.getData().subscribe((data) => { this.products = data; });
    
    this._interactionService.cartMovie$.subscribe(
      movie => {
          this.addedItem = movie;
      }
    )
  }

}
