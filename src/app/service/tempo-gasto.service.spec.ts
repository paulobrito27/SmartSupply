import { TestBed } from '@angular/core/testing';

import { TempoGastoService } from './tempo-gasto.service';

describe('TempoGastoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempoGastoService = TestBed.get(TempoGastoService);
    expect(service).toBeTruthy();
  });
});
