import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {
  public cardArray;
  constructor(private shop:CardService) {
    this.shop.getcards().subscribe(res=>{
      this.cardArray=res;
    });
   }
  

  ngOnInit() {
  }

}
