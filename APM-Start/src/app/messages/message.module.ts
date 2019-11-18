import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    // since this is feature module we use forChild medthod
    RouterModule.forChild([
      {
        path: 'message',
        component: MessageComponent,
        outlet: 'popup'
      },
    ])
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
