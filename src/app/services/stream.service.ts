import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { BehaviorSubject} from 'rxjs';  
import { ProductModel } from '../models/Product.model'
import { filter, map } from 'rxjs/operators';

 
@Injectable({
  providedIn: 'root'
})
export class StreamService {
  
  constructor() { }
  //<any[]>([])
  private cards:BehaviorSubject<ProductModel[]> =new BehaviorSubject([{
                                                        ProductId:"string",
                                                        Category: "string",
                                                        Description: "string",
                                                        Name:"string",
                                                        ProductPicUrl :"string",
                                                        Price:"string",
                                                      }]) ;
  
  getcards(): Observable<any> { 
    return this.cards.asObservable(); 
  }

  addToCard(item :ProductModel){
    if(!this.searchInCard(item)){
        this.cards.next(this.cards.getValue().concat([item]));
    }
  }

  removeFromCard(item :ProductModel){
    if(this.searchInCard(item)){
      let after_delete =this.cards.getValue().filter(event =>event.ProductId !== item.ProductId);
      this.cards.next(after_delete);
   }  
}
  searchInCard(item :ProductModel):any{
    let search =this.cards.getValue().filter(event =>event.ProductId === item.ProductId);
     return (search.length > 0) ? true : false;
  }
  
}
