import { Component, OnInit,Input } from '@angular/core';
import { StreamService }from '../../services/stream.service';
 
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
   public cardArray;
   constructor(private stream:StreamService) { 
      this.stream.getcards().subscribe(res => {//console.log(res);
      this.cardArray=res;
      });
   }

   
  ngOnInit() {
  }
  deleteFromCard(item){
    this.stream.removeFromCard(item);
  }

}
