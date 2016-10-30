import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductsComponent } from './components/products/products.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'ingredients',
    component: IngredientsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AllergyClientRoutingModule { }
