import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { CommonModule } from '@angular/common';

export interface Book {
  title: string,
  author: string
}

@Component({
  selector: 'app-my-books-page',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './my-books-page.component.html',
  styleUrl: './my-books-page.component.scss'
})
export class MyBooksPageComponent {
  myBooksList: Book[];

  constructor() {
    this.myBooksList = [
      { title: "My Title 1", author: "My Author 1" },
      { title: "My Title 2", author: "My Author 2" },
      { title: "My Title 3", author: "My Author 3" }
    ];
  }

}
