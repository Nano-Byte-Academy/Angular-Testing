import { Component } from '@angular/core';

@Component({
  selector: 'app-async-tests',
  standalone: true,
  imports: [],
  templateUrl: './async-tests.component.html',
  styleUrl: './async-tests.component.scss'
})
export class AsyncTestsComponent {
  myString: string = "My String 1!";

  setMyString() {
    new Promise(resolve => {
      resolve('My String 2!');
    }).then((val: any) => {
      this.myString = val;
    });
  }


}
