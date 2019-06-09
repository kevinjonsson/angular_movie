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

  constructor(service: DataService) 
  { service.getOrders().subscribe((data) => { this.allOrders = data; }); }

  ngOnInit() {
  }

}
