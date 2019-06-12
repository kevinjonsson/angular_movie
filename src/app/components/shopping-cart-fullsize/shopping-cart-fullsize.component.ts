import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
import { IData } from 'src/app/interfaces/IData';
import { ICartProduct } from 'src/app/interfaces/ICartProducts';

@Component({
  selector: 'app-shopping-cart-fullsize',
  templateUrl: './shopping-cart-fullsize.component.html',
  styleUrls: ['./shopping-cart-fullsize.component.css']
})
export class ShoppingCartFullsizeComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  cartMovies: ICartProduct[] = [];
  totalPrice: number;


  ngOnInit() {
    this.totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    let stringFromLocalStorage = localStorage.getItem("cartMovies");
    if(stringFromLocalStorage !== null) {
      this.cartMovies = JSON.parse(localStorage.getItem("cartMovies"));
    }

    this._interactionService.cartMovie$.subscribe(
      movie => {
          this.addToCart(movie);
      }
    )
  }

  addToCart(movie: IData){
    let addedMovie = false;

    for (let i = 0; i < this.cartMovies.length; i++){
      if (movie.id === this.cartMovies[i].movie.id){
        this.cartMovies[i].amount++;
        addedMovie = true;
      }
    }

    if(addedMovie === false){
      this.cartMovies.push({ movie: movie, amount: 1 });
    }
    
    localStorage.setItem('cartMovies', JSON.stringify(this.cartMovies));

    this._interactionService.sendCartItem(this.cartMovies);
    this.totalPriceFunction(this.cartMovies);
  }

  remove(cartMovie){
    var local: ICartProduct[] = JSON.parse(localStorage.getItem("cartMovies"));
    for (let i = 0; i < local.length; i++){
      if (cartMovie.movie.id === local[i].movie.id){
        local[i].amount--;

        if (local[i].amount === 0){
          local.splice(i, 1);
        }

        localStorage.setItem('cartMovies', JSON.stringify(local));
        this.cartMovies = JSON.parse(localStorage.getItem("cartMovies"));
      }
    }
    this._interactionService.sendCartItem(this.cartMovies);
    this.totalPriceFunction(this.cartMovies);
  }

  totalPriceFunction(movies: ICartProduct[]){
    this.totalPrice = 0;

    for (let i = 0; i < movies.length; i++){
      this.totalPrice += movies[i].amount * movies[i].movie.price;
    }
    localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
  }

  emptyCart(){
    var local: ICartProduct[] = JSON.parse(localStorage.getItem("cartMovies"));
    local.splice(0);
    this.cartMovies = local;
    localStorage.setItem('cartMovies', JSON.stringify(local));
    this.totalPrice = 0;
    localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
    
    this._interactionService.sendCartItem(this.cartMovies);
  }

  clearLocal(){
    localStorage.clear();
  }
  
  setLocal(){
    var local = [{movie: {id: 77, name: "Interstellar", description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018'}, amount: 2}, 
    {movie: {id: 77, name: "Dark", description: 'hej', price: 50, imageUrl: 'image', year: 2003, added: '2018'}, amount: 1}];

    localStorage.setItem('cartMovies', JSON.stringify(local));
  }
}
