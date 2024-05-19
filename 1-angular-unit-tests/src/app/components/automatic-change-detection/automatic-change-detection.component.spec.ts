import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { AutomaticChangeDetectionComponent } from './automatic-change-detection.component';

describe('AutomaticChangeDetectionComponent', () => {
  let component: AutomaticChangeDetectionComponent;
  let fixture: ComponentFixture<AutomaticChangeDetectionComponent>;
  let h3: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomaticChangeDetectionComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomaticChangeDetectionComponent);
    component = fixture.componentInstance;
    h3 = fixture.nativeElement.querySelector('h3');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display my book title', () => {
    expect(h3.textContent).toContain(component.myBookName);
  });

  it('test a different book title', () => {
    component.myBookName = "My Changed title 2";
    fixture.detectChanges();
    expect(h3.textContent).toContain("My Changed title 2");
  });

});
