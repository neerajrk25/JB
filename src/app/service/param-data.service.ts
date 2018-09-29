import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ParamDataService {
    private param: any;

    constructor() { }

    setData(data: any) {
        let param = { data: data };
        this.param = param;
    }

    getData() {
        return this.param;
    }
}
