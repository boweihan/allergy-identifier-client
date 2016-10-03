import { Component, OnInit } from '@angular/core';
import { ProductSearchService } from '../../services/product-search-service/product-search.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductSearchService]
})
export class ProductsComponent implements OnInit {
  products: Observable<Product[]>;
  private searchTerms = new Subject<string>(); /* NOTE: subject for observable transformation */

  constructor(
    private productSearchService: ProductSearchService
  ) { }

  getProducts(term: string): void { /* NOTE: pushing into the observable stream */
    this.searchTerms.next(term);
    console.log(term);
  }
  
  ngOnInit() {
    this.products = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        ? this.productSearchService.getProducts(term)
        : Observable.of<Product[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Product[]>([]);
      });
  }

}

