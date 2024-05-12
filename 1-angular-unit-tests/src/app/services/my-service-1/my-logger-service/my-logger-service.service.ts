import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLoggerServiceService {

  constructor() { }

  log(msg: string) {
    console.log(msg);
  }

}
