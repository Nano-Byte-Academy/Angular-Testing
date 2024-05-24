import { ComponentFixture, TestBed, fakeAsync, flush, flushMicrotasks, tick, waitForAsync } from '@angular/core/testing';

import { AsyncTestsComponent } from './async-tests.component';
import { delay, of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AsyncTestsComponent', () => {
  let component: AsyncTestsComponent;
  let fixture: ComponentFixture<AsyncTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncTestsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AsyncTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should demo usage of Jasmine done()', (done: DoneFn) => {
    let myFlag = false;

    // mocking some async calls
    setTimeout(() => {
      myFlag = true;
      expect(myFlag).toBeTruthy();
      done();
    }, 500);

  });

  it('should demo usage of fakeAsync() testing zone', fakeAsync(() => {
    let myFlag = false;

    // mocking some async calls
    setTimeout(() => {
      myFlag = true;
    }, 500);

    tick(400);
    tick(90);
    tick(10);
    expect(myFlag).toBeTruthy();

  }));

  it('should demo usage of fakeAsync() testing zone flush()', fakeAsync(() => {
    let myFlag = false;

    // mocking some async calls
    setTimeout(() => {
      myFlag = true;
    }, 500);

    flush();
    expect(myFlag).toBeTruthy();

  }));

  it('setTimeouts and promises', fakeAsync(() => {
    Promise.resolve().then(() => {
      //console.log("promise 1 called!")
    });

    setTimeout(() => {
      //console.log("setTimeout 1 called!")
    });

    setTimeout(() => {
      //console.log("setTimeout 2 called!")
    });

    Promise.resolve().then(() => {
      //console.log("promise 2 called!")
    });


    flush();
    expect(true).toBeTruthy();

  }));

  it('demo flushMicrotasks()', fakeAsync(() => {
    let myFlag = false;

    Promise.resolve().then(() => {
      myFlag = true;
      expect(myFlag).toBeTruthy();
    });

    flushMicrotasks();

  }));

  it('Combination of Micro and Macro tasks', fakeAsync(() => {
    let myCounter = 0;

    Promise.resolve().then(() => {
      myCounter += 100;
      setTimeout(() => {
        myCounter += 1;
      }, 1000);

    });

    expect(myCounter).toBe(0);
    flushMicrotasks();
    expect(myCounter).toBe(100);
    tick(500);
    expect(myCounter).toBe(100);
    tick(500);
    expect(myCounter).toBe(101);

  }));

  it('Testing synchronous observables', () => {
    let myFlag = false;

    const myObs$ = of(myFlag);
    myObs$.subscribe(() => {
      myFlag = true;
    });

    expect(myFlag).toBeTruthy();

  });

  it('Testing asynchronous observables', fakeAsync(() => {
    let myFlag = false;

    const myObs$ = of(myFlag).pipe(delay(1000));
    myObs$.subscribe(() => {
      myFlag = true;
    });

    tick(1000);
    expect(myFlag).toBeTrue();

  }));

  // it('waitForAsync demo', waitForAsync(() => {
  //   let myFlag1 = false;
  //   let myFlag2 = false;

  //   Promise.resolve().then(() => {
  //     myFlag1 = true;
  //   });
  //   setTimeout(() => {
  //     myFlag2 = true;
  //   }, 1000);

  //   fixture.whenStable().then(() => {
  //     expect(myFlag1).withContext("myFlag1 assertion").toBeTrue();
  //     expect(myFlag2).withContext("myFlag2 assertion").toBeTrue();
  //   });

  // }));

  it('demo waitForAsync()', waitForAsync(() => {
    const myString1 = fixture.debugElement.query(By.css('h3')).nativeElement.innerText;
    expect(myString1).toBe("My String 1!");

    fixture.debugElement.query(By.css('.my-string-button'))
      .triggerEventHandler('click', null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const myString2 = fixture.debugElement.query(By.css('h3')).nativeElement.innerText;
      expect(myString2).toBe("My String 2!");
    });

  }));


});
