import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (!tokenService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
