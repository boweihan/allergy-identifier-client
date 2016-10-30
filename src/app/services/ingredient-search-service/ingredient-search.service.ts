import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../../models/ingredient';

@Injectable()
export class IngredientSearchService {

  constructor(
    private http: Http
  ) { }

  getIngredients(term: string): Observable<Ingredient[]> {
    return this.http
      .get("https://ccrosser.herokuapp.com/ingredients?name="+term)
      .map((r: Response) => r.json() as Ingredient[]);
  }
}
