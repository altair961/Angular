import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';



@NgModule({
  imports: [
    RouterModule.forChild([ // forChild ensures that we do not register routing service provider a second time
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent 
      }
    ])
  ],
  exports: [RouterModule] 
})
export class ProductRoutingModule { }
  