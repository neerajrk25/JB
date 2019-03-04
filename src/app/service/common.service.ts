import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    private showBookNow = false;

    private _filter: { min: number, max: number, propertyType?: string, page?: number } = {
        min: 1000,
        max: 5000,
        page: 1,
        propertyType: 'any'
    };

    constructor() { }

    setShowBookNow(isVisible: boolean) {
        this.showBookNow = isVisible;
    }

    getShowBookNow() {
        return this.showBookNow;
    }

    public get filter() {
        return this._filter;
    }

    public set filter(value) {
        if (!value.page) {
            value.page = 1;
        }
        if (!value.propertyType || value.propertyType == "") {
            value.propertyType = "any";
        }
        this._filter = value;
    }

}
