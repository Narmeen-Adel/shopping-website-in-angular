import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { BehaviorSubject} from 'rxjs';  
import { ProductModel } from '../models/Product.model'
import { filter, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  private cards:BehaviorSubject<object[]> =new BehaviorSubject([
    {   ProductId:null,
        Name:"",
        Price: "string",
        Count: 0,
    }
]) ;

getcards(): Observable<any> { 
return this.cards.asObservable(); 
}

addToCard(item :ProductModel){
  let index =this.searchInCard(item.ProductId);
  if(index !=-1) {
     this.cards.getValue()[index]['Count'] ++;
  }else{
     this.cards.next(this.cards.getValue().
     concat([{ProductId:item.ProductId,Price:item.Price,Name:item.Name,Count:1}]));
   }
  console.log("card",this.cards);
}

removeFromCard(item :ProductModel){
  let index =this.searchInCard(item.ProductId);
  if(index !==-1){
    if(this.cards.getValue()[index]['Count'] >0){
       this.cards.getValue()[index]['Count'] --;
     }
   }  
   console.log(this.cards);
}
searchInCard(item :string):any{
    let search =this.cards.getValue().findIndex(i =>i['ProductId'] === item);
    return search;
    }
}
