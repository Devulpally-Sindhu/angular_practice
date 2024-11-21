import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amma2Component } from './amma2.component';

describe('Amma2Component', () => {
  let component: Amma2Component;
  let fixture: ComponentFixture<Amma2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Amma2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Amma2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
