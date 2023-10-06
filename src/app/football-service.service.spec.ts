import { TestBed } from '@angular/core/testing';

import { FootballServiceService } from './football-service.service';

describe('FootballServiceService', () => {
  let service: FootballServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
