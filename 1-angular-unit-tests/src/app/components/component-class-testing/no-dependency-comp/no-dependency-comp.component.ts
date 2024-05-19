import { Component } from '@angular/core';

@Component({
  selector: 'app-no-dependency-comp',
  standalone: true,
  imports: [],
  templateUrl: './no-dependency-comp.component.html',
  styleUrl: './no-dependency-comp.component.scss'
})
export class NoDependencyCompComponent {

  isToggleOn: boolean = false;

  onSubmitClick() {
    this.isToggleOn = !this.isToggleOn;
  }

  get toggleMessage() {
    return `The Togle is: ${this.isToggleOn ? 'on' : 'off'}`;
  }

}
