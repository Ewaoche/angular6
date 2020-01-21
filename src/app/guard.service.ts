import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GuardService  implements CanActivate{

  constructor(private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){

    if(localStorage.getItem('currentuser')){
     //logged in 
     return true;
    }

    this.router.navigate(['/login'], {queryParams:{returnurl:state.url}});
    
    return false;

  }
}
