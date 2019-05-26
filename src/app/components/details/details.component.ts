import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IData } from 'src/app/interfaces/IData';
import { DataService } from 'src/app/services/data.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: IData;

  constructor(private route: ActivatedRoute, private service: DataService, private _interactionService: InteractionService) { }

  ngOnInit() {
    this.route.params.subscribe(myParams => {
      const myId = myParams['id'];
      this.service.getProductData(myId).subscribe((data) => { this.product = data; });
      console.log(this.product.imageUrl);
    });
  }

  addToCart(movie){
    this._interactionService.sendCartProduct(movie);
  }

}
