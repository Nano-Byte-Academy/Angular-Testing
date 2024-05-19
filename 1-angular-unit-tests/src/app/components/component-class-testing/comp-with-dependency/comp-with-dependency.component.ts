import { Component, OnInit } from '@angular/core';
import { Author, BookServiceService } from './book-service/book-service.service';

@Component({
  selector: 'app-comp-with-dependency',
  standalone: true,
  imports: [],
  templateUrl: './comp-with-dependency.component.html',
  styleUrl: './comp-with-dependency.component.scss'
})
export class CompWithDependencyComponent implements OnInit {

  myAuthor: Author;

  constructor(private bookSvc: BookServiceService) {
    this.myAuthor = this.bookSvc.author;
  }

  ngOnInit(): void {
    this.myAuthor = { id: 3, name: 'My Author 3' };
  }

}
