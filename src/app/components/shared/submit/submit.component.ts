import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  @Input('name') name:string;
  @Input('type') type:string;
  @Input('value') value:string;

  constructor() { }

  ngOnInit() {
  }

}
