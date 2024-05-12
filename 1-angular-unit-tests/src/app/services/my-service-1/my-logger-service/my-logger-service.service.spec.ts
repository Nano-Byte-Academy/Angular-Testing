import { TestBed } from '@angular/core/testing';

import { MyLoggerServiceService } from './my-logger-service.service';

describe('MyLoggerServiceService', () => {
  let service: MyLoggerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLoggerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
