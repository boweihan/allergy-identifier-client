/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrossIngredientsService } from './cross-ingredients.service';

describe('Service: CrossIngredients', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrossIngredientsService]
    });
  });

  it('should ...', inject([CrossIngredientsService], (service: CrossIngredientsService) => {
    expect(service).toBeTruthy();
  }));
});
