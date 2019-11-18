import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';




@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: '**', component: PageNotFoundComponent }
    ]
    // feel free to add or remove as desired
    // , { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

