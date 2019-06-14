import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IOrder } from 'src/app/interfaces/IOrder';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allOrders: IOrder[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.service.getOrders().subscribe((data) => { this.allOrders = data;  console.log(this.allOrders)});
  }

  remove(id) {
    this.service.deleteOrder(id).subscribe(() => {
      this.loadOrders();
    });
  }
}
