import { Component, OnInit, Input } from '@angular/core';
import { IData } from 'src/app/interfaces/IData';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-movie-presentation',
  templateUrl: './movie-presentation.component.html',
  styleUrls: ['./movie-presentation.component.css']
})
export class MoviePresentationComponent implements OnInit {
  
  @Input() products: IData[];

  constructor(private _interactionService: InteractionService) {}

  ngOnInit() {
  }

  addToCart(movie){
    this._interactionService.sendCartProduct(movie);
  }

}