import { TestBed } from '@angular/core/testing';

import { InfouserService } from './infouser.service';

describe('InfouserService', () => {
  let service: InfouserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfouserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
