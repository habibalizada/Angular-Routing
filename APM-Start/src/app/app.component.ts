import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Router } from '@angular/router'; // 6. import Roter
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // registering th animation
  animations: [slideInAnimation]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService,
              // 7. inject the router
              private router: Router) { }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome'); // 8. navigate to welcome page (navigateByUrl is used to insure every excisting url is removed)
  }
}
