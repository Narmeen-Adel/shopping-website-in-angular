import { Component, OnInit, Input } from '@angular/core';
import {ProductModel} from '../../models/Product.model';
import {StreamService} from '../../services/stream.service';
import {Router} from '@angular/router';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  //product_item :ProductModel;
  @Input() product_item :ProductModel;
  constructor(private stream:StreamService ,private router:Router,private shop:CardService) {  
    this.stream.getcards().subscribe(res=>console.log(res));
  }
  

  ngOnInit() {
  }

  displaySingleProduct(){
    this.router.navigate(['product',this.product_item.ProductId ]);
     // console.log(this.product_item.Name );
  }
  addToCard(item:ProductModel){
    this.shop.addToCard(item);
    console.log(this.shop.searchInCard(item.ProductId));
  }
  addToWishList(item:ProductModel){
    this.stream.addToCard(item);
    console.log(item);
  }
  

}
