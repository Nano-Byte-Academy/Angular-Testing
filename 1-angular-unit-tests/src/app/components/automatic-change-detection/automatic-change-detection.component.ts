import { Component } from '@angular/core';

@Component({
  selector: 'app-automatic-change-detection',
  standalone: true,
  imports: [],
  templateUrl: './automatic-change-detection.component.html',
  styleUrl: './automatic-change-detection.component.scss'
})
export class AutomaticChangeDetectionComponent {

  myBookName: string = "My First Book Name 1";
  
}
