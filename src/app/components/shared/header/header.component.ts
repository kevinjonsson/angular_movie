import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
import { DataService } from 'src/app/services/data.service';
import { IData } from 'src/app/interfaces/IData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _interactionService: InteractionService, private service: DataService) { }

  cartItem: number;

  searchValue: IData[] = [];

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
    this.closeWindow();
  }

  searchMovie(searchValue){
    if(searchValue.length < 2){
      searchValue = "bla";
    }else{
      this.service.getSearch(searchValue).subscribe((data) => { this.searchValue = data; });
    
      var x = document.getElementById("searchDropdown");
      x.style.display = "block";
    }
  }

  closeWindow(){
    var x = document.getElementById("searchDropdown");
    x.style.display = "none";
  }
}
