import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  @Input() bookTitle!: string;
  @Input() bookAuthor!: string;

}
