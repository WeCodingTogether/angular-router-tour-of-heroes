import { inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { AuthService } from './auth.service';


export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // if already logged in, return true
  if(authService.isLoggedIn) {
    return true;
  }

  const sessionId = 12345678;

  const navigationExtras: NavigationExtras = {
    queryParams: { session_id: sessionId },
    fragment: 'anchor'
  }

  return router.createUrlTree(['/login'], navigationExtras);
  // // if haven't logged in yet, redirect to login page
  // return router.parseUrl('login');
};
