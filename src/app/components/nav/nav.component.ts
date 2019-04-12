import { Component, OnInit,Input } from '@angular/core';
import { StreamService }from '../../services/stream.service';
import { CardService } from '../../services/card.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
   public wishArray;
   public cardArray;
   constructor(private stream:StreamService,private shop :CardService,private router:Router) { 
      this.stream.getcards().subscribe(res => {//console.log(res);
        this.wishArray=res;
      });
      this.shop.getcards().subscribe(res=>{
        this.cardArray=res;
      });
   }

   
  ngOnInit() {
  }
  deleteFromCard(item){
    this.shop.removeFromCard(item);
    this.shop.getcards().subscribe(res=>{
      this.cardArray=res;
    });
  }
  deleteFromWishList(item){
    this.stream.removeFromCard(item);

  }

  navigateTo(path:string){
    this.router.navigate([path]);
  }
}
