import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductSpecsComponent } from './components/product-specs/product-specs.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';

const routes: Routes = [
  {path: 'product', component: ProductComponent, //localhost:4200/product
    children: [
      {path: 'details', component: ProductDetailsComponent, //localhost:4200/product/details
        children: [
          {path: 'specs', component: ProductSpecsComponent}, //localhost:4200/product/details/specs
          {path: 'price', component: ProductPriceComponent}, //localhost:4200/product/details/price
        ]}
    ]},
  {path: '**', redirectTo: '/', pathMatch:"full"} //redirect to //localhost:4200 (AppComponent)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
