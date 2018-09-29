import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    private showBookNow = false;

    constructor() { }

    setShowBookNow(isVisible: boolean) {
        this.showBookNow = isVisible;
    }

    getShowBookNow() {
        return this.showBookNow;
    }

}
