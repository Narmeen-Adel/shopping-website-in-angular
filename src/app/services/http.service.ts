import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/Product.model';
// import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  configUrl = 'assets/db.json';
  all_product :Observable<any>;
  constructor(private http: HttpClient) { 
    this.all_product =  this.http.get(this.configUrl);
  }
 

  getProducts():Observable<any> {
    
      return this.all_product;
  }
  
  // getOneProduct(id):any {
  //    this.all_product.pipe(map(data => {})).subscribe(result => {
  //     console.log(result)});;
      //.map(movies => movies.find(movie => movie.id == id));
    //console.log(this.all_product);
    // this.all_product.forEach(element => {
    // //  console.log(element);
    //   for(let i=0;i< element.length;i++)
    //   {
       
    //     if(element[i].ProductId===id)
    //     { return element[i];}
    //   }
    //console.log(element.filter(ele  =>ele.ProductId ===id));
    // let result=element.filter(ele  =>ele.ProductId ===id)[0];
    // console.log("ser",element.filter(ele  =>ele.ProductId ===id)[0]);
    // return result;
      //console.log(element,'element');
      
   // });
   //   }
    
  
}
