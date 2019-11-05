import { TestBed } from '@angular/core/testing';

import { DirectTreasureService } from './direct-treasure.service';

describe('DirectTreasureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectTreasureService = TestBed.get(DirectTreasureService);
    expect(service).toBeTruthy();
  });
});
