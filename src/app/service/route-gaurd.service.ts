import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

    constructor() { }

    canActivate() {
        return true;
    }
}
