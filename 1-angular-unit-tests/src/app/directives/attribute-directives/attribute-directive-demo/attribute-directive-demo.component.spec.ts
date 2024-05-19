import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectiveDemoComponent } from './attribute-directive-demo.component';
import { CustomColorDirective } from '../custom-color.directive';
import { By } from '@angular/platform-browser';

describe('AttributeDirectiveDemoComponent', () => {
  let component: AttributeDirectiveDemoComponent;
  let fixture: ComponentFixture<AttributeDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDirectiveDemoComponent, CustomColorDirective]
    });

    fixture = TestBed.createComponent(AttributeDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a red span', () => {
    const span: HTMLElement = fixture.nativeElement.querySelector('span');
    const color = span.style.color;
    expect(color).toBe('red');
  });

  it('should have 3 usages of the attribute directive', () => {
    const myAttrDirectives = fixture.debugElement.queryAll(By.directive(CustomColorDirective));
    expect(myAttrDirectives.length).toBe(3);
  });

});
