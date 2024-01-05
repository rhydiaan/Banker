import { Component } from '@angular/core';

@Component({
  selector: 'app-banker',
  templateUrl: './banker.component.html',
  styleUrls: ['./banker.component.css']
})
export class BankerComponent {

  mean: number = 20000;
  maxNumber: number = 100000;
  casesRemaining: number = 11;
  offer = (12275.30 + (0.748 * this.mean) + (2714.74 * this.casesRemaining) + (0.40 * this.maxNumber) + (.0000006986 * this.mean^2) + (32.623 * this.casesRemaining^2)) / 4

}
