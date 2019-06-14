import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IData } from 'src/app/interfaces/IData';
import { MockDataService } from 'src/app/services/mock-data.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { ICategories } from 'src/app/interfaces/ICategories';

@Component({
  selector: 'app-movie-shop',
  templateUrl: './movie-shop.component.html',
  styleUrls: ['./movie-shop.component.css']
})
export class MovieShopComponent implements OnInit {

  products: IData[] = [];
  categories: ICategories[];

  actionMovie: IData[] = [];
  thrillerMovie: IData[] = [];
  comedyMovie: IData[] = [];
  sciFiMovie: IData[] = [];


  addedItem = { movie: { id: 77, name: "Interstellar", description: 'hej', price: 50, year: 2003, added: '2018', productCategory: [{ categoryId: 8, category: null }] }, amount: 2 };
  title = 'modal-app';
  showModal = false;

  constructor(service: DataService, private _interactionService: InteractionService) {
    service.getCategories().subscribe((dataCategory) => {
      this.categories = dataCategory;
      service.getData().subscribe((data) => { this.products = data; this.sortCategories(); });
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

  sortCategories() {
    for (let a = 0; a < this.products.length; a++) {
      var movieCategory = this.products[a].productCategory;
      for (let b = 0; b < movieCategory.length; b++) {
        if (movieCategory[b].categoryId === this.categories[0].id) {
          this.actionMovie.push(this.products[a]);
        }
        if (movieCategory[b].categoryId === this.categories[1].id) {
          this.thrillerMovie.push(this.products[a]);
        }
        if (movieCategory[b].categoryId === this.categories[2].id) {
          this.comedyMovie.push(this.products[a]);
        }
        if (movieCategory[b].categoryId === this.categories[3].id) {
          this.sciFiMovie.push(this.products[a]);
        }
      }
    }
  }
}