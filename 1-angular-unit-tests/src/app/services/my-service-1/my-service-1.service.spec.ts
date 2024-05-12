import { TestBed } from '@angular/core/testing';
import { MyService1Service } from './my-service-1.service';
import { MyLoggerServiceService } from './my-logger-service/my-logger-service.service';

describe('MyService1Service', () => {
  let service: MyService1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyService1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Testing spyOn
  it('#1 Testing spyOn example', () => {
    const myLogger = new MyLoggerServiceService();
    spyOn(myLogger, 'log');

    const myService1 = new MyService1Service(myLogger);
    const myResult = myService1.getStringValue();

    expect(myResult).toBe('my string return value');
    expect(myLogger.log).toHaveBeenCalledTimes(1);
  });

  // Testing jasmine.createSpyObj()
  it('#2 Testing jasmine.createSpyObj() example', () => {
    const myFakeLogger = jasmine.createSpyObj('MyLoggerServiceService', ['log']);

    const myService1 = new MyService1Service(myFakeLogger);
    const myResult = myService1.getStringValue();

    expect(myResult).toBe('my string return value');
    expect(myFakeLogger.log).toHaveBeenCalledTimes(1);
  });

  it('#getStringValue should return a string value', () => {
    expect(service.getStringValue())
      .withContext('Inside getStringValue() my test')
      .toBe('my string return value');
  });

});
