import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IData } from 'src/app/interfaces/IData';
import { MockDataService } from 'src/app/services/mock-data.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { ICategorys } from 'src/app/interfaces/ICategorys';

@Component({
  selector: 'app-movie-shop',
  templateUrl: './movie-shop.component.html',
  styleUrls: ['./movie-shop.component.css']
})
export class MovieShopComponent implements OnInit {

  products: IData[] = [];
  categorys: ICategorys[];

  actionMovie: IData[] = [];
  thrillerMovie: IData[] = [];
  comedyMovie: IData[] = [];
  sciFiMovie: IData[] = [];


  addedItem = {movie: {id: 77, name: "Interstellar", description: 'hej', price: 50, year: 2003, added: '2018', productCategory:[{ categoryId:8, category:null}]}, amount: 2};
  title = 'modal-app';
  showModal = false;

  constructor(service: DataService, private _interactionService: InteractionService) {
    service.getCategorys().subscribe((dataCategory) => { 
      this.categorys = dataCategory; 
      service.getData().subscribe((data) => { this.products = data; this.sortCategorys(); });
    });
   }

  ngOnInit() {
    
    this._interactionService.cartMovie$.subscribe(
      movie => {
          this.addedItem = movie;
          this.toggleModal();
      }
    )
  }
  
  toggleModal = () => {
    this.showModal = !this.showModal;
  }

  sortCategorys(){
    for (let a = 0; a < this.products.length; a++){
      var movieCategory = this.products[a].productCategory;
      for(let b = 0; b < movieCategory.length; b++){
        if( movieCategory[b].categoryId === this.categorys[0].id){
          this.actionMovie.push(this.products[a]);
        }
        if( movieCategory[b].categoryId === this.categorys[1].id){
          this.thrillerMovie.push(this.products[a]);
        }
        if( movieCategory[b].categoryId === this.categorys[2].id){
          this.comedyMovie.push(this.products[a]);
        }
        if( movieCategory[b].categoryId === this.categorys[3].id){
          this.sciFiMovie.push(this.products[a]);
        }
      }
    }
  }
}
