import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router'; // 1.a. Import Router

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([ // 1.b. Add it here 
      { path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
