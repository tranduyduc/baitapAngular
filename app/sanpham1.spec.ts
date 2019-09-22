import { TestBed } from '@angular/core/testing';

import { SanphamService} from './sanpham1.service';

describe('CustomermagaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SanphamService = TestBed.get(SanphamService);
    expect(service).toBeTruthy();
  });
});