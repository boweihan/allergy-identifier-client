import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable()
export class CrossIngredientsService {

  constructor(
    private http: Http
  ) { }

  getCrossReferencedProducts(ingredients: string): Observable<Product[]> {
    return this.http
      .get("https://ccrosser.herokuapp.com/cross_ingredients?"+ingredients)
      .map((r: Response) => r.json() as Product[]);
  }
}
