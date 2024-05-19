import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyBooksPageComponent } from './components/presentational-components/my-books-page/my-books-page.component';
import { AttributeDirectiveDemoComponent } from './directives/attribute-directives/attribute-directive-demo/attribute-directive-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MyBooksPageComponent,
    AttributeDirectiveDemoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1-angular-unit-tests';
}
