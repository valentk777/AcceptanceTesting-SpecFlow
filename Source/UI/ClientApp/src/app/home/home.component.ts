import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { OrderRequest } from '../models/order'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public orderForm: FormGroup;
  private baseUrl: string;
  public edited = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.orderForm = this.formBuilder.group({
      treeName: [],
      treeType: [],
      deliveryAddress: []
    });
    this.baseUrl = baseUrl;
  }

  public saveOrder(): void {
    console.log(this.orderForm.value);
    this.orderForm.reset();
    this.edited = true;
    //this.http.post<OrderRequest>(this.baseUrl + 'order', this.orderForm.value).subscribe(result => {
    //  console.log(result);
    //},
    //  error => console.error(error)
    //);
  }
}
