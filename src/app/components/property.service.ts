import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
export class Property {
    isFeatured?: boolean;
    price: number;
    rooms: number;
    capacity: number;
    name: string;
    address: string;
    images: Array<any>;
    isBooked?: boolean;
}

export class PropertyResponse {
    properties: Property[] = [];
    totalRecords: number = 0;
}

@Injectable({
    providedIn: 'root'
})
export class PropertyService {
    properties: Property[] = [{
        address: '123 Smith Dr, Annapolis, MD',
        name: 'Modern Family Home',
        isFeatured: false,
        images: [],
        price: 5000,
        rooms: 3,
        isBooked: true,
        capacity: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        name: 'Modern Family Home',
        isFeatured: false,
        images: [],
        price: 5000,
        rooms: 3,
        capacity: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        name: 'Modern Family Home',
        isFeatured: false,
        images: [],
        price: 5000,
        rooms: 3,
        isBooked: true,
        capacity: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        name: 'Modern Family Home',
        isFeatured: false,
        images: [],
        price: 5000,
        rooms: 3,
        isBooked: true,
        capacity: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        name: 'Modern Family Home',
        isFeatured: true,
        images: [],
        price: 5000,
        rooms: 3,
        capacity: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        name: 'Modern Family Home',
        isFeatured: false,
        images: [],
        price: 5000,
        rooms: 3,
        capacity: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        name: 'Modern Family Home',
        isFeatured: true,
        images: [],
        price: 5000,
        rooms: 3,
        capacity: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        name: 'Modern Family Home',
        isFeatured: false,
        images: [],
        price: 5000,
        isBooked: true,
        rooms: 3,
        capacity: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        name: 'Modern Family Home',
        isFeatured: false,
        images: [],
        price: 5000,
        rooms: 3,
        capacity: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        name: 'Modern Family Home',
        isFeatured: false,
        images: [],
        price: 5000,
        rooms: 3,
        capacity: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        name: 'Modern Family Home',
        isFeatured: false,
        images: [],
        price: 5000,
        rooms: 3,
        capacity: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        name: 'Modern Family Home',
        isFeatured: false,
        images: [],
        price: 5000,
        rooms: 3,
        capacity: 12
    }];

    propertyId: number;
    constructor(
        private http: HttpClient
    ) { }

    getPropertyList(pageNumber: number): PropertyResponse {
        let properties: Property[] = [];
        Object.assign(properties, this.properties);
        let start = 9 * (pageNumber - 1);
        let end = (9 * pageNumber);
        if (end < properties.length) {
            properties = properties.slice(start, end);
        } else {
            properties = properties.slice(start, (properties.length));
        }
        return { properties: properties, totalRecords: 12 };
    }

    setPropertyId(propertyId: number) {
        this.propertyId = propertyId;
    }

    getProperty(): Property {
        return this.properties[this.propertyId];
    }

    addProperty(addPropertyDTO) {
        let url = `${environment.baseUrl}/property/addProperty`;
        return this.http.post(url, addPropertyDTO);
    }
}
