import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import { ProductModel} from '../../models/Product.model';
import { ActivatedRoute } from '@angular/router';
// import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  //product_item:object;
   public products;
  id :string;
  constructor(private stream:HttpService ,private route :ActivatedRoute) { 
     }

  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get('id');
    console.log(this.stream.getProducts())
    this.stream.getProducts().subscribe(products =>this.products = products);
    console.log("rr",this.products);
  }

}

