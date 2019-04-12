import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ProductModel} from '../../models/Product.model';
import { ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  product_item:object;
  id :string;
  constructor(private stream :HttpService ,private route :ActivatedRoute) { 
     }

  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get('id');
    //this.stream.getOneProduct
    //this.stream.getOneProduct();
    //console.log(this.id);
    let  test=this.stream.getOneProduct(this.id);
    //subscribe(product =>console.log(product));
    //console.log("rr",this.stream.getOneProduct(this.id));
  }

}

