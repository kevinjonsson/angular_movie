import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/interfaces/IOrder';
import { DataService } from 'src/app/services/data.service';
import * as  moment from  'moment';
import { IOrderRow } from 'src/app/interfaces/IOrderRows';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order: IOrder = {companyId:0,created:"0001-01-01T00:00:00",createdBy:"null",paymentMethod:"null",totalPrice:0,status:0,orderRows:[]};

  orderRows: IOrderRow[] = [];



  constructor(private service: DataService) { }

  ngOnInit() { 
  }

  addOrder(name, email, payment){
    
    let stringFromLocalStorage = JSON.parse(localStorage.getItem("cartMovies"));

    for(let i = 0; i < stringFromLocalStorage.length; i++){

      let productId = stringFromLocalStorage[i].movie.id;
      let amount = stringFromLocalStorage[i].amount;

      this.orderRows.push({ productId:productId, amount:amount})
    }

    let companyId = 21;
    let created = moment().format();
    let createdBy = name+": "+email;
    let paymentMethod = payment;
    let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    let status = 0;

    let newOrder = {companyId: companyId,created: created,createdBy: createdBy,paymentMethod: paymentMethod,totalPrice: totalPrice,status: status, orderRows: this.orderRows }
    
    this.service.postOrders(newOrder).subscribe();

  }

}