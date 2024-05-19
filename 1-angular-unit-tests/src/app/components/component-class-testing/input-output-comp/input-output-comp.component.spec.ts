import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputCompComponent } from './input-output-comp.component';
import { Book } from '../../presentational-components/my-books-page/my-books-page.component';
import { first } from 'rxjs';

describe('InputOutputCompComponent', () => {
  let component: InputOutputCompComponent;
  let fixture: ComponentFixture<InputOutputCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutputCompComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputOutputCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the selected event when the book is selected', () => {
    const comp = new InputOutputCompComponent();
    const book: Book = { title: 'My Title 1', author: 'My Author 1' };
    comp.book = book;

    comp.selectedBook.pipe(first()).subscribe((selectedBook: Book) => expect(selectedBook).toBe(book));
    comp.clickedBook();
  });


});
