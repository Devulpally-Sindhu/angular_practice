import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amma1Component } from './amma1.component';

describe('Amma1Component', () => {
  let component: Amma1Component;
  let fixture: ComponentFixture<Amma1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Amma1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Amma1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
