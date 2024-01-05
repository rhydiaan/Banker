import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moneybox',
  templateUrl: './moneybox.component.html',
  styleUrls: ['./moneybox.component.css']
})
export class MoneyboxComponent {

  @Input() amount!: string;
  isClicked: boolean = false;

  constructor(){
    
  }

}
    