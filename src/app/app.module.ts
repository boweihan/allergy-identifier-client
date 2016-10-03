import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/main/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { AllergyClientRoutingModule } from './app-routing.module';
import { CrossReferenceComponent } from './components/cross-reference/cross-reference.component';
import { ProductsComponent } from './components/products/products.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

import 'rxjs/Rx';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    CrossReferenceComponent,
    ProductsComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AllergyClientRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
