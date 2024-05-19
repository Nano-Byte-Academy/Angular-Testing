import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBooksPageComponent } from './my-books-page.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('MyBooksPageComponent', () => {
  let component: MyBooksPageComponent;
  let fixture: ComponentFixture<MyBooksPageComponent>;
  let elem: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBooksPageComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MyBooksPageComponent);
        component = fixture.componentInstance;
        elem = fixture.debugElement;
        fixture.detectChanges();
      });
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the books list', () => {
    const myBooksList = elem.queryAll(By.css(".myBookStyle"));
    const myFirstBookTitle = elem.query(By.css(".myBookStyle h2"));

    expect(myBooksList).toBeTruthy();
    expect(myBooksList.length).toBe(3);
    expect(myFirstBookTitle.nativeElement.textContent).toBe("My Title 1");

    // elem.nativeElement.click();
    // fixture.detectChanges();

    let h2: HTMLElement;
    h2 = fixture.nativeElement.querySelector('.myBookStyle h2');
    expect(h2.textContent).toBe("My Title 1");

    // some synchronous call here maybe for some test data
    // fixture.detectChanges();
    // expect(data).toBeTruthy(); 
  });
});
