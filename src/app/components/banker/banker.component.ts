import { Component, OnInit } from '@angular/core';
import { BankerService } from 'src/app/services/banker.service';

@Component({
  selector: 'app-banker',
  templateUrl: './banker.component.html',
  styleUrls: ['./banker.component.css']
})
export class BankerComponent implements OnInit {

  values: number[] = [];
  offer: number = 0;

  constructor(private bankerService: BankerService){

  }

  ngOnInit(): void {
    this.bankerService.valueEmitter.subscribe(
      (result: string[]) => {
        const valuesToInt: number[] = result.map(
          (value: string) => {
            return parseInt(value.replace(",", ""));
          }
        );
        this.values = valuesToInt;
      }
    );
  }

  meanCalculator(){
    const valuesSum: number = this.values.reduce(
      (accumelator, currentValue) => {
        return accumelator + currentValue;
      }, 0
    );

    const mean: number = valuesSum / this.values.length;
    return Math.round(mean * 100) / 100;
  }

  roundCalculator(){
    const casesRemaining: number = this.values.length;

    if (casesRemaining === 17){
      this.offer = this.offerCalculator(1); 

    } 
    else if (casesRemaining === 14){
      this.offer = this.offerCalculator(3); 

    }
    else if (casesRemaining === 11){
      this.offer = this.offerCalculator(4); 

    }
    else if (casesRemaining === 8){
      this.offer = this.offerCalculator(5); 

    }
    else if (casesRemaining === 5){
      this.offer = this.offerCalculator(7); 

    }
    else if (casesRemaining === 2){
      this.offer = this.offerCalculator(9); 
    }
    else {
      this.offer = this.offerCalculator(0); 
    }
  }


  offerCalculator(offerMultiplier: number){
    if (this.values.length === 0){
      return 0;
    }
    const mean: number = this.meanCalculator();
    const offer: number = mean * offerMultiplier / 10;
    return parseFloat(offer.toFixed(2));
  }
}
