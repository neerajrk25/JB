import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate() {
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['signin']);
        }
        return true;
    }
}
