import { Component, OnInit } from '@angular/core';
import { SlickSlide } from '../../jumble-bie-shared/slick-slides.model';

@Component({
    selector: 'app-property-details',
    templateUrl: './property-details.component.html',
    styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
    slides: SlickSlide[] = [
        { imagePath: 'assets/images/property-1.jpg' },
        { imagePath: 'assets/images/property-2.jpg' },
        { imagePath: 'assets/images/property-3.jpg' },
        { imagePath: 'assets/images/property-4.jpg' },
        { imagePath: 'assets/images/property-5.jpg' },
        { imagePath: 'assets/images/property-6.jpg' },
        { imagePath: 'assets/images/property-7.jpg' }
    ];
    constructor() { }

    ngOnInit() {
    }

}
