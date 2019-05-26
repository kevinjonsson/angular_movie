import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  cartItem: number;

  ngOnInit() {
    this.cartItem = JSON.parse(localStorage.getItem("cartItem"));
    
    this._interactionService.cartItems$.subscribe(
      item => {   
        this.cartItem = 0;
        for (let i = 0; i < item.length; i++){
          this.cartItem += item[i].amount;
        }
        localStorage.setItem('cartItem', JSON.stringify(this.cartItem));
      }
    )
  }
}
