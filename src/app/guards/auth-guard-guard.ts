import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    // ✅ فيه توكين → يدخل
    return true;
  } else {
    // ❌ مفيش توكين → يروح على login
    router.navigate(['/login']);
    return false;
  }
};
