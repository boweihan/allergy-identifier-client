import { Component, OnInit } from '@angular/core';
import { IngredientSearchService } from '../../services/ingredient-search-service/ingredient-search.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
  providers: [IngredientSearchService]
})
export class IngredientsComponent implements OnInit {

  ingredients: Observable<Ingredient[]>;
  private searchTerms = new Subject<string>(); /* NOTE: subject for observable transformation */

  constructor(
    private IngredientSearchService: IngredientSearchService
  ) { }

  getIngredients(term: string): void { /* NOTE: pushing into the observable stream */
    this.searchTerms.next(term);
  }
  
  ngOnInit() {
    this.ingredients = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        ? this.IngredientSearchService.getIngredients(term)
        : Observable.of<Ingredient[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Ingredient[]>([]);
      });
  }
}
