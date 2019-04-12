import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models/Product.model';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 products : ProductModel[];
 constructor(private query:HttpService) { }

  ngOnInit() {
    this.query.getProducts().subscribe(products =>this.products =products);
    

  }

}
