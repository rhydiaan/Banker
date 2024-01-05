import { Component } from '@angular/core';
import { MoneyboxComponent } from '../moneybox/moneybox.component';

@Component({
  selector: 'app-gamepage',
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.css']
})
export class GamepageComponent {

  values: string[] = ["0.01", "1,000", "0.1", "3,000", "0.5", "5,000", "1", "10,000", "5", "15,000", "10", "20,000", "50", "35,000", "100", "50,000", "250", "75,000", "500", "100,000", "750", "250,000"];

  clickedBoxes: { [key: number]: { isClicked: boolean } } = {};


  constructor(){
    for (let i = 0; i < this.values.length; i++){
      this.clickedBoxes[i] = { isClicked: true };
    }
  }

  onClick(index: number){ 
    this.clickedBoxes[index].isClicked = !this.clickedBoxes[index].isClicked;
    
  }
}
