import { Component } from '@angular/core';

@Component({
  selector: 'app-manual-change-detection',
  standalone: true,
  imports: [],
  templateUrl: './manual-change-detection.component.html',
  styleUrl: './manual-change-detection.component.scss'
})
export class ManualChangeDetectionComponent {

  myBookName: string = "My First Book Name 1";

}
