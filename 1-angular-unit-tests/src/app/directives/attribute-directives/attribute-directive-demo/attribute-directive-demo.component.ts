import { Component } from '@angular/core';
import { CustomColorDirective } from '../custom-color.directive';

@Component({
  selector: 'app-attribute-directive-demo',
  standalone: true,
  imports: [ CustomColorDirective ],
  templateUrl: './attribute-directive-demo.component.html',
  styleUrl: './attribute-directive-demo.component.scss'
})
export class AttributeDirectiveDemoComponent {

}
