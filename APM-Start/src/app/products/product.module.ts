import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router'; // 1.a. Import Router
import { ProductResolver } from './product-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([ // 1.b. Add RouterModule here since it is feature rout we use .forChiled()
      { path: 'products', component: ProductListComponent }, // 2. Configure routes
      { path: 'products/:id',
        component: ProductDetailComponent,
        resolve: { resolvedData: ProductResolver}
      },
      { path: 'products/:id/edit',
        component: ProductEditComponent,
        resolve: {resolvedData: ProductResolver}
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
