import { TestBed } from '@angular/core/testing';
import { MyService1Service } from './my-service-1.service';
import { MyLoggerServiceService } from './my-logger-service/my-logger-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { POSTS_LIST } from './PostsListData';

describe('MyService1Service', () => {
  let myService1: MyService1Service,
    myFakeLogger: any, httpTestingController: HttpTestingController;

  beforeEach(() => {
    myFakeLogger = jasmine.createSpyObj('MyLoggerServiceService', ['log']);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MyService1Service,
        { provide: MyLoggerServiceService, useValue: myFakeLogger }
      ]
    });
    myService1 = TestBed.inject(MyService1Service);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(myService1).toBeTruthy();
  });

  it('Testing HTTP GET mock call', () => {
    myService1.getAllPosts()
      .subscribe(postList => {
        expect(postList).toBeTruthy();
        expect(postList[0].title).toBe('my title 1');
      });

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toEqual('GET');
    req.flush(POSTS_LIST);
    //httpTestingController.verify();

  });

  // Testing spyOn
  // it('#1 Testing spyOn example', () => {
  //   const myLogger = new MyLoggerServiceService();
  //   spyOn(myLogger, 'log');

  //   const myService1 = new MyService1Service(myLogger);
  //   const myResult = myService1.getStringValue();

  //   expect(myResult).toBe('my string return value');
  //   expect(myLogger.log).toHaveBeenCalledTimes(1);
  // });

  // Testing jasmine.createSpyObj()
  // it('#2 Testing jasmine.createSpyObj() example', () => {
  //   const myFakeLogger = jasmine.createSpyObj('MyLoggerServiceService', ['log']);

  //   const myService1 = new MyService1Service(myFakeLogger);
  //   const myResult = myService1.getStringValue();

  //   expect(myResult).toBe('my string return value');
  //   expect(myFakeLogger.log).toHaveBeenCalledTimes(1);
  // });

  it('#getStringValue should return a string value', () => {
    expect(myService1.getStringValue())
      .withContext('Inside getStringValue() my test')
      .toBe('my string return value');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
