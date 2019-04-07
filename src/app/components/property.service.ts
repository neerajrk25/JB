import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class imageFile {
    id?: string | number;
    fileName?: string;
    fileType?: string;
    downloadUri?: string;
    byteArrayString?: string;
}

export class comment {
    id?: string | number;
    comment?: string;
    rating?: number;
    name?: string;
}
export class Property {
    price?: number;
    rooms?: number;
    capacity?: number;
    name?: string;
    address?: string;
    isBooked?: boolean;
    id?: string | number;
    description?: string;
    type?: string;
    images?: imageFile[];
    comments?: comment[];
    status?: string;
}

export class PropertyResponse {
    properties: Property[] = [];
    totalRecords: number = 0;
}

@Injectable({
    providedIn: 'root'
})
export class PropertyService {
    properties: Property[] = [
        {
            address: '123 Smith Dr, Annapolis, MD',
            name: 'Modern Family Home',

            images: [],
            price: 5000,
            rooms: 3,
            isBooked: true,
            capacity: 12
        }, {
            address: '123 Smith Dr, Annapolis, MD',
            name: 'Modern Family Home',

            images: [],
            price: 5000,
            rooms: 3,
            capacity: 12
        }, {
            address: '123 Smith Dr, Annapolis, MD',
            name: 'Modern Family Home',

            images: [],
            price: 5000,
            rooms: 3,
            isBooked: true,
            capacity: 12
        }, {
            address: '123 Smith Dr, Annapolis, MD',
            name: 'Modern Family Home',

            images: [],
            price: 5000,
            rooms: 3,
            isBooked: true,
            capacity: 12
        }, {
            address: '123 Smith Dr, Annapolis, MD',
            name: 'Modern Family Home',

            images: [],
            price: 5000,
            rooms: 3,
            capacity: 12
        }, {
            address: '123 Smith Dr, Annapolis, MD',
            name: 'Modern Family Home',

            images: [],
            price: 5000,
            rooms: 3,
            capacity: 12
        }, {
            address: '123 Smith Dr, Annapolis, MD',
            name: 'Modern Family Home',

            images: [],
            price: 5000,
            rooms: 3,
            capacity: 12
        }, {
            address: '123 Smith Dr, Annapolis, MD',
            name: 'Modern Family Home',

            images: [],
            price: 5000,
            isBooked: true,
            rooms: 3,
            capacity: 12
        }, {
            address: '123 Smith Dr, Annapolis, MD',
            name: 'Modern Family Home',

            images: [],
            price: 5000,
            rooms: 3,
            capacity: 12
        }, {
            address: '123 Smith Dr, Annapolis, MD',
            name: 'Modern Family Home',

            images: [],
            price: 5000,
            rooms: 3,
            capacity: 12
        }, {
            address: '123 Smith Dr, Annapolis, MD',
            name: 'Modern Family Home',

            images: [],
            price: 5000,
            rooms: 3,
            capacity: 12
        }, {
            address: '123 Smith Dr, Annapolis, MD',
            name: 'Modern Family Home',

            images: [],
            price: 5000,
            rooms: 3,
            capacity: 12
        }];

    propertyId: number;
    constructor(
        private http: HttpClient
    ) { }

    getPropertyList(filters: { low: string | number, high: string | number, page: number }) {
        // let properties: Property[] = [];
        // Object.assign(properties, this.properties);
        // let start = 9 * (pageNumber - 1);
        // let end = (9 * pageNumber);
        // if (end < properties.length) {
        //     properties = properties.slice(start, end);
        // } else {
        //     properties = properties.slice(start, (properties.length));
        // }
        // return { properties: properties, totalRecords: 12 };
        let getPropertyListUrl = `${environment.baseUrl}/property/findProperty`;
        return this.http.post<PropertyResponse>(getPropertyListUrl, filters);
    }

    setPropertyId(propertyId: number) {
        this.propertyId = propertyId;
    }

    getProperty(): Property {
        return this.properties[this.propertyId];
    }

    getPropertyById(propertyId) {
        let getPropertyByIdUrl = `${environment.baseUrl}/property/getProperty/${propertyId}`;
        return this.http.get<Property>(getPropertyByIdUrl);
    }

    getListOfDummyImages() {
        return this.http.get<{
        "format": string,
        "width": number,
        "height": number,
        "filename": string,
        "id": number,
        "author": string,
        "author_url": string,
        "post_url": string
    }[]>('https://picsum.photos/list');
    }

    addProperty(addPropertyDTO) {
        let url = `${environment.baseUrl}/property/addProperty`;
        return this.http.post(url, addPropertyDTO);
    }
}
