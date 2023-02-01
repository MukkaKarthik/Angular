import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexComponentRouterComponent } from './complex-component-router.component';

describe('ComplexComponentRouterComponent', () => {
  let component: ComplexComponentRouterComponent;
  let fixture: ComponentFixture<ComplexComponentRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexComponentRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexComponentRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
