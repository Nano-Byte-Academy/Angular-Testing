import { TestBed } from '@angular/core/testing';

import { CompWithDependencyComponent } from './comp-with-dependency.component';
import { BookServiceService } from './book-service/book-service.service';

class MockBookService {
  author = { id: 2, name: 'My Author 2' };
}

describe('CompWithDependencyComponent', () => {
  let component: CompWithDependencyComponent;
  let bookService: BookServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // provide the component-under-test and all dependent services
      providers: [
        CompWithDependencyComponent,
        { provide: BookServiceService, useClass: MockBookService }
      ]
    })
      .compileComponents();

    // inject both the component and the dependent service.
    component = TestBed.inject(CompWithDependencyComponent);
    bookService = TestBed.inject(BookServiceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be default value as in the mock, after construction', () => {
    expect(component.myAuthor).toEqual({ id: 2, name: 'My Author 2' });
  });

  it('should be id 3 after Angular calls ngOnInit', () => {
    component.ngOnInit();
    expect(component.myAuthor).toEqual({ id: 3, name: 'My Author 3' });
  });

});
