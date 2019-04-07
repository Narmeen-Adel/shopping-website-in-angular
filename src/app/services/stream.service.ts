import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { BehaviorSubject} from 'rxjs'; 
import { ProductModel } from '../models/Product.model'
 
@Injectable({
  providedIn: 'root'
})
export class StreamService {
  
  constructor() { }
  private cards:BehaviorSubject<number[]> =new BehaviorSubject([1,5,8]) ;
  setcards(val: number[]):void { 
    this.cards.next(val); 
  } 
  getcards(): Observable<any> { 
    return this.cards.asObservable(); 
  }
}
