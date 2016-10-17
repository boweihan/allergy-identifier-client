import { Component, OnInit } from '@angular/core';
import { IngredientSearchService } from '../../services/ingredient-search-service/ingredient-search.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../../models/ingredient';
import { Product } from '../../models/product';
import { CrossIngredientsService } from '../../services/cross-ingredients-service/cross-ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
  providers: [IngredientSearchService, CrossIngredientsService]
})
export class IngredientsComponent implements OnInit {

  ingredients: Observable<Ingredient[]>;
  crProducts: Observable<Product[]>;
  crNames = "";
  crossIngredients = [];
  private searchTerms = new Subject<string>(); /* NOTE: subject for observable transformation */
  private crossTerms = new Subject<string>(); /* NOTE: subject for observable cross-reference */

  constructor(
    private IngredientSearchService: IngredientSearchService,
    private crossIngredientsService: CrossIngredientsService
  ) { }

  getIngredients(term: string): void { /* NOTE: pushing into the observable stream */
    this.searchTerms.next(term);
  }
  
  addToCrossReference(term: string): void {
    if (!this.crNames.length) {
      this.crNames = this.crNames + "ingredient[]=" + encodeURIComponent(term);
    } else {
      this.crNames = this.crNames + "&&ingredient[]=" + encodeURIComponent(term);
    }
    this.crossTerms.next(this.crNames);
  }
  
  removeFromCrossReference(term: string): void {
    this.crNames = this.crNames.split("&&ingredient[]=" + encodeURIComponent(term)).join("");
    this.crNames = this.crNames.split("ingredient[]=" + encodeURIComponent(term) + "&&").join(""); /* NOTE: this sucks */
    this.crNames = this.crNames.split("ingredient[]=" + encodeURIComponent(term)).join("");
    console.log(this.crNames);
    this.crossTerms.next(this.crNames);
  }
  
  addToIngredientArray(ingredient) {
    if (this.crossIngredients === [] || this.crossIngredients.includes(ingredient) === false) { /* NOTE: this error is not a real error */
      this.crossIngredients.push(ingredient);  
      this.addToCrossReference(ingredient.name);
    }
  }
  
  removeIngredient(ingredient) {
    for (let i=0;i<this.crossIngredients.length;i++) {
      console.log(this.crossIngredients[i].name);
      console.log(ingredient.name);
      if (this.crossIngredients[i].name === ingredient.name) {
        this.crossIngredients.splice(i, 1);
        this.removeFromCrossReference(ingredient.name);
      }
    }
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
      
    this.crProducts = this.crossTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        ? this.crossIngredientsService.getCrossReferencedProducts(term)
        : Observable.of<Product[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Product[]>([]);
      });
  }
}
