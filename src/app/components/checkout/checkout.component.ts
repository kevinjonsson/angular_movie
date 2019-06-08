import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/interfaces/IOrder';
import { DataService } from 'src/app/services/data.service';
import * as  moment from  'moment';
import { IOrderRow } from 'src/app/interfaces/IOrderRows';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private service: DataService, private fb: FormBuilder) { }

  order: IOrder = {companyId:0,created:"0001-01-01T00:00:00",createdBy:"null",paymentMethod:"null",totalPrice:0,status:0,orderRows:[]};

  orderRows: IOrderRow[] = [];

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    payment: ['', Validators.required]
  
  });

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
    let createdBy = " Name: " + name+", Email: "+email;
    let paymentMethod = payment;
    let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    let status = 0;

    let newOrder = {companyId: companyId,created: created,createdBy: createdBy,paymentMethod: paymentMethod,totalPrice: totalPrice,status: status, orderRows: this.orderRows }
    
    this.service.postOrders(newOrder).subscribe();

  }

}