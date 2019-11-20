import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';




@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'products',
        canActivate: [ AuthGuard],
        loadChildren: () =>
          import('./products/product.module').then(m => m.ProductModule)
      },
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: '**', component: PageNotFoundComponent }
    ]
    // feel free to add or remove this as desired
    // , { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

