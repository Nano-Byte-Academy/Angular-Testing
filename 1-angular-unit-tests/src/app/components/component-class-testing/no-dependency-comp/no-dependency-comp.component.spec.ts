import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDependencyCompComponent } from './no-dependency-comp.component';

describe('NoDependencyCompComponent', () => {
  let component: NoDependencyCompComponent;
  let fixture: ComponentFixture<NoDependencyCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoDependencyCompComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoDependencyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmitClick() should toggle #isOn', () => {
    const comp = new NoDependencyCompComponent();
    expect(comp.isToggleOn).withContext('off at first').toBe(false);
    comp.onSubmitClick();
    expect(comp.isToggleOn).withContext('on after click').toBe(true);
    comp.onSubmitClick();
    expect(comp.isToggleOn).withContext('off after second click').toBe(false);
  });

  it('#onSubmitClick() should set #message to ": on"', () => {
    const comp = new NoDependencyCompComponent();
    expect(comp.toggleMessage)
      .withContext('off at first')
      .toMatch(/: off/i);
    comp.onSubmitClick();
    expect(comp.toggleMessage).withContext('on after clicked').toMatch(/: on/i);
  });


});
