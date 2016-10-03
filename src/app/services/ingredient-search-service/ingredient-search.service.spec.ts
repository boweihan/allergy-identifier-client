/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IngredientSearchService } from './ingredient-search.service';

describe('Service: IngredientSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientSearchService]
    });
  });

  it('should ...', inject([IngredientSearchService], (service: IngredientSearchService) => {
    expect(service).toBeTruthy();
  }));
});
