import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pracice2Component } from './pracice-2.component';

describe('Pracice2Component', () => {
  let component: Pracice2Component;
  let fixture: ComponentFixture<Pracice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pracice2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pracice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
