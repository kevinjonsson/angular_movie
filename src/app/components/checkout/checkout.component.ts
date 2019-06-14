import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/interfaces/IOrder';
import { DataService } from 'src/app/services/data.service';
import * as  moment from 'moment';
import { IOrderRow } from 'src/app/interfaces/IOrderRows';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ICartProduct } from 'src/app/interfaces/ICartProducts';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  group = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    payment: new FormControl(''),
  });

  constructor(private service: DataService, private fb: FormBuilder, private _interactionService: InteractionService) {
  }

  order: IOrder = { companyId: 0, created: "0001-01-01T00:00:00", createdBy: "null", paymentMethod: "null", totalPrice: 0, status: 0, orderRows: [] };

  orderRows: IOrderRow[] = [];

  cartMovies: ICartProduct[];

  totalPrice: number;

  showModal = false;

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    payment: ['', Validators.required]

  });

  ngOnInit() {
    this.cartMovies = JSON.parse(localStorage.getItem("cartMovies"));
    this.totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
  }

  addOrder(name, email, payment) {

    this.toggleModal();

    let cartMovies = JSON.parse(localStorage.getItem("cartMovies"));

    for (let i = 0; i < cartMovies.length; i++) {

      let productId = cartMovies[i].movie.id;
      let amount = cartMovies[i].amount;

      this.orderRows.push({ productId: productId, amount: amount })
    }

    let companyId = 21;
    let created = moment().format();
    let createdBy = " Name: " + name + ", Email: " + email;
    let paymentMethod = payment;
    let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    let status = 0;

    let newOrder = { companyId: companyId, created: created, createdBy: createdBy, paymentMethod: paymentMethod, totalPrice: totalPrice, status: status, orderRows: this.orderRows }

    this.service.postOrders(newOrder).subscribe();

    this.emptyCart();
  }

  toggleModal = () => {
    var x = document.getElementById("close_modal");
    x.style.display = "none";
    this.showModal = !this.showModal;
  }

  emptyCart() {
    var local: ICartProduct[] = JSON.parse(localStorage.getItem("cartMovies"));
    local.splice(0);
    this.cartMovies = local;
    localStorage.setItem('cartMovies', JSON.stringify(local));
    this.totalPrice = 0;
    localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
    this._interactionService.sendCartItem(this.cartMovies);
  }
}