import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualChangeDetectionComponent } from './manual-change-detection.component';

describe('ManualChangeDetectionComponent', () => {
  let component: ManualChangeDetectionComponent;
  let fixture: ComponentFixture<ManualChangeDetectionComponent>;
  let h3: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualChangeDetectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualChangeDetectionComponent);
    component = fixture.componentInstance;
    h3 = fixture.nativeElement.querySelector('h3');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display my book title', () => {
    fixture.detectChanges();
    expect(h3.textContent).toContain(component.myBookName);
  });

  it('test a different book title', () => {
    component.myBookName = "My Changed title 2";
    fixture.detectChanges();
    expect(h3.textContent).toContain("My Changed title 2");
  });

});
