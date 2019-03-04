import { Component, OnInit } from '@angular/core';
import { SlickSlide } from '../../jumble-bie-shared/slick-slides.model';
import { PropertyService, Property, imageFile } from '../property.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-property-details',
    templateUrl: './property-details.component.html',
    styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
    slides: SlickSlide[] | imageFile[] = [];

    propertyId: string;

    rating = 3;

    ratingArr = new Array(5);

    propertyDetails: Property;
    loadSlider: boolean;

    constructor(
        private propertyService: PropertyService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe((param: Params) => {
            this.propertyId = param['propertyId'];
            this.getPropertyById();
        })
    }

    getPropertyById() {
        this.propertyService.getPropertyById(this.propertyId).subscribe((response) => {
            this.propertyDetails = response;
            this.slides = this.propertyDetails.images;
            this.loadSlider = true;
        }, e => {
            this.propertyDetails = {
                "id": "599e677f-ae24-4855-9ca3-de426b3c361b",
                "name": "prop1",
                "address": "lonavala",
                "capacity": 10,
                "rooms": 4,
                "description": "good Place",
                "type": "bunglaow",
                "price": 5000,
                "status": null,
                "images": [
                    {
                        "id": "8920dd9a-258a-4931-9f6e-40728e80806e",
                        "fileName": "IMG_0197.JPG",
                        "fileType": "image/jpeg",
                        "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0197.JPG",
                        "byteArrayString": null
                    },
                    {
                        "id": "099a87bd-623a-4d73-8065-e858d6859912",
                        "fileName": "IMG_0209.JPG",
                        "fileType": "image/jpeg",
                        "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0209.JPG",
                        "byteArrayString": null
                    },
                    {
                        "id": "bb79e46e-d214-4262-8088-882d81f3f291",
                        "fileName": "IMG_0210.JPG",
                        "fileType": "image/jpeg",
                        "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0210.JPG",
                        "byteArrayString": null
                    }
                ],
                "comments": []
            }
        })
    }
}
