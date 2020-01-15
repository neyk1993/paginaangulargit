import { TestBed } from '@angular/core/testing';

import { InfopaginaService } from './infopagina.service';

describe('InfopaginaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfopaginaService = TestBed.get(InfopaginaService);
    expect(service).toBeTruthy();
  });
});
