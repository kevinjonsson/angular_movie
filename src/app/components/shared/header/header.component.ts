import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  cartItem = 0;
  ngOnInit() {
    this._interactionService.cartItem$.subscribe(
      item => {
        if(item === true){
          this.cartItem++;
        }else{
          this.cartItem--;
        }
      }
    )
  }
}
