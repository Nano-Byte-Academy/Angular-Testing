import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { MyLoggerServiceService } from './my-logger-service/my-logger-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService1Service {

  constructor(private logger: MyLoggerServiceService,
    private http: HttpClient
  ) { }

  getAllPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getStringValue() {
    this.logger.log("inside getStringValue() method");
    return 'my string return value';
  }

  getPromiseValue(): Promise<string> {
    // Simulate asynchronous behavior
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('my promise value'), 10000);
    });
  }

  getObservableValue(): Observable<string> {
    // Simulate asynchronous behavior
    return of('my observable value').pipe(delay(10000));
  }

}
