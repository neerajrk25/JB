import { Injectable } from '@angular/core';
export class Property {
    isFeatured?: boolean;
    price: number;
    noOfRooms: number;
    noOfPeople: number;
    description: string;
    address: string;
    imgPath: string;
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
        description: 'Modern Family Home',
        isFeatured: false,
        imgPath: 'assets/images/property-1.jpg',
        price: 5000,
        noOfRooms: 3,
        noOfPeople: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        description: 'Modern Family Home',
        isFeatured: false,
        imgPath: 'assets/images/property-2.jpg',
        price: 5000,
        noOfRooms: 3,
        noOfPeople: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        description: 'Modern Family Home',
        isFeatured: false,
        imgPath: 'assets/images/property-3.jpg',
        price: 5000,
        noOfRooms: 3,
        noOfPeople: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        description: 'Modern Family Home',
        isFeatured: false,
        imgPath: 'assets/images/property-4.jpg',
        price: 5000,
        noOfRooms: 3,
        noOfPeople: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        description: 'Modern Family Home',
        isFeatured: true,
        imgPath: 'assets/images/property-5.jpg',
        price: 5000,
        noOfRooms: 3,
        noOfPeople: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        description: 'Modern Family Home',
        isFeatured: false,
        imgPath: 'assets/images/property-6.jpg',
        price: 5000,
        noOfRooms: 3,
        noOfPeople: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        description: 'Modern Family Home',
        isFeatured: true,
        imgPath: 'assets/images/property-7.jpg',
        price: 5000,
        noOfRooms: 3,
        noOfPeople: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        description: 'Modern Family Home',
        isFeatured: false,
        imgPath: 'assets/images/property-8.jpg',
        price: 5000,
        noOfRooms: 3,
        noOfPeople: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        description: 'Modern Family Home',
        isFeatured: false,
        imgPath: 'assets/images/property-9.jpg',
        price: 5000,
        noOfRooms: 3,
        noOfPeople: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        description: 'Modern Family Home',
        isFeatured: false,
        imgPath: 'assets/images/property-9.jpg',
        price: 5000,
        noOfRooms: 3,
        noOfPeople: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        description: 'Modern Family Home',
        isFeatured: false,
        imgPath: 'assets/images/property-9.jpg',
        price: 5000,
        noOfRooms: 3,
        noOfPeople: 12
    }, {
        address: '123 Smith Dr, Annapolis, MD',
        description: 'Modern Family Home',
        isFeatured: false,
        imgPath: 'assets/images/property-9.jpg',
        price: 5000,
        noOfRooms: 3,
        noOfPeople: 12
    }];

    propertyId: number;
    constructor() { }

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
}
