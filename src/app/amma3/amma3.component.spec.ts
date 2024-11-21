import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amma3Component } from './amma3.component';

describe('Amma3Component', () => {
  let component: Amma3Component;
  let fixture: ComponentFixture<Amma3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Amma3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Amma3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
