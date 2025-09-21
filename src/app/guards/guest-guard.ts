import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // لو فيه توكن → المستخدم داخل بالفعل
  const token = localStorage.getItem('token');

  if (token) {
    // redirect to products
    return router.createUrlTree(['/products']);
  }

  return true;
};
