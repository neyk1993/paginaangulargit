import { TestBed } from '@angular/core/testing';

import { InfoequipoService } from './infoequipo.service';

describe('InfoequipoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoequipoService = TestBed.get(InfoequipoService);
    expect(service).toBeTruthy();
  });
});
