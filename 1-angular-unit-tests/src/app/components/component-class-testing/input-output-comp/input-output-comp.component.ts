import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../presentational-components/my-books-page/my-books-page.component';

@Component({
  selector: 'app-input-output-comp',
  standalone: true,
  imports: [],
  templateUrl: './input-output-comp.component.html',
  styleUrl: './input-output-comp.component.scss'
})
export class InputOutputCompComponent {
  book!: Book;
  @Input() bookTitle!: string;
  @Input() bookAuthor!: string;

  @Output() selectedBook = new EventEmitter<Book>();

  clickedBook() {
    this.selectedBook.emit(this.book);
  }
  
}
