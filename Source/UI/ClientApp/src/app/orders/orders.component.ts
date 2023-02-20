import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Order } from '../models/order'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent {
  public orders: Order[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Order[]>(baseUrl + 'order').subscribe(result => {
      this.orders = result;
    }, error => console.error(error));
  }
}
