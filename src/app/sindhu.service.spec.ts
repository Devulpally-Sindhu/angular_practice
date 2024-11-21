import { TestBed } from '@angular/core/testing';

import { SindhuService } from './sindhu.service';

describe('SindhuService', () => {
  let service: SindhuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SindhuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
