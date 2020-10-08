import { TestBed } from '@angular/core/testing';

import { AutosService } from './autos.service';

describe('AutosService', () => {
  let service: AutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
