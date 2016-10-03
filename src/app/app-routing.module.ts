import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrossReferenceComponent } from './cross-reference/cross-reference.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/analyze',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'analyze',
    component: CrossReferenceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AllergyClientRoutingModule { }
