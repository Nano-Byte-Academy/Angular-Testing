import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyBooksPageComponent } from './components/presentational-components/my-books-page/my-books-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MyBooksPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1-angular-unit-tests';
}
