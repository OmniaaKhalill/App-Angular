import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const canLoginGuard: CanActivateFn = (route, state) => {

  let router=inject(Router)
  const token = localStorage.getItem("token");
  if (!token) {
    router.navigateByUrl("/login");
    return false;
  } else {
    return true;
  }
  
};
