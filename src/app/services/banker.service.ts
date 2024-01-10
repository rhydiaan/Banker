import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankerService {

  values: string[] = [];
  valueEmitter: EventEmitter<string[]> = new EventEmitter();

  constructor() {}

  setValues(values: string[]){
    this.values = values;
  }

}
