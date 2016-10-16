/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrossProductsService } from './cross-products.service';

describe('Service: CrossProducts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrossProductsService]
    });
  });

  it('should ...', inject([CrossProductsService], (service: CrossProductsService) => {
    expect(service).toBeTruthy();
  }));
});
