import { Component, OnInit, Input } from '@angular/core';
import {ProductModel} from '../../models/Product.model';
import {StreamService} from '../../services/stream.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  //product_item :ProductModel;
  @Input() product_item :ProductModel;
  constructor(private stream:StreamService) { }

  ngOnInit() {
  }
  displaySingleProduct(item:ProductModel){
      console.log(item);
  }
  addToCard(item:ProductModel){
    console.log(item);
  }

}
