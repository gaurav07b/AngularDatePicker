import { TestBed, inject } from '@angular/core/testing';

import { FetchempService } from './fetchemp.service';

describe('FetchempService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchempService]
    });
  });

  it('should be created', inject([FetchempService], (service: FetchempService) => {
    expect(service).toBeTruthy();
  }));
});
