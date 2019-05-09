import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
import { IData } from 'src/app/interfaces/IData';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  cartMovies: IData[] = [];

  ngOnInit() {
    this._interactionService.cartMovie$.subscribe(
      movie => {
        this.cartMovies.push(movie);
      }
    )
  }

}
