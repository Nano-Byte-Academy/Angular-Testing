import { Component } from '@angular/core';
import { CustomColorDirective } from './custom-color.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    standalone: true,
    template: `
      <h2 appCustomColor>red color font 1</h2>
      <h2 appCustomColor>red color font 2</h2>
      <h2>Default color</h2>
      `,
    imports: [CustomColorDirective],
})
class TestComponent { }

describe('CustomColorDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let elemWithDirective: any;
    let elemWithoutDirective: any;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            imports: [CustomColorDirective, TestComponent],
        }).createComponent(TestComponent);

        fixture.detectChanges(); // initial binding

        // all elements with CustomColorDirective directive
        elemWithDirective = fixture.debugElement.queryAll(By.directive(CustomColorDirective));

        // all h2 elements without CustomColorDirective directive
        elemWithoutDirective = fixture.debugElement.queryAll(By.css('h2:not([appCustomColor])'));
    });

    it('should have 2 elements with the color directive', () => {
        expect(elemWithDirective.length).toBe(2);
    });

    it('should have 1 element without the color directive', () => {
        expect(elemWithoutDirective.length).toBe(1);
    });

    it('should color 1st <h2> "red"', () => {
        const color = elemWithDirective[0].nativeElement.style.color;
        expect(color).toBe('red');
    });

    it('should color last <h2> empty ""', () => {
        const color = elemWithoutDirective[0].nativeElement.style.color;
        expect(color).toBe('');
    });

});
