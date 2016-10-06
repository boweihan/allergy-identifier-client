/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrossReferenceService } from './cross-reference.service';

describe('Service: CrossReference', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrossReferenceService]
    });
  });

  it('should ...', inject([CrossReferenceService], (service: CrossReferenceService) => {
    expect(service).toBeTruthy();
  }));
});
