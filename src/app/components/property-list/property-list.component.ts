import { Component, OnInit } from '@angular/core';
import { PropertyResponse, PropertyService, Property } from '../property.service';
import { Router } from '@angular/router';
declare var $, wNumb;

@Component({
    selector: 'app-property-list',
    templateUrl: './property-list.component.html',
    styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
    propertyReponse = new PropertyResponse();
    properties: Property[] = [];
    pages: Array<number>;
    currentPage: number;
    constructor(private propertyService: PropertyService, private router: Router) { }
    ngOnInit() {
        $(function () {
            $(".tabs").tabs({
                create: function (event, ui) {
                    $(this).fadeIn();
                }
            });
        });
        this.propertyReponse = this.propertyService.getPropertyList(1);
        this.properties = this.propertyReponse.properties;
        this.pages = new Array(Math.ceil(this.propertyReponse.totalRecords / 9));
        this.currentPage = 0;
    }

    setPage(i) {
        this.currentPage = i;
        this.propertyReponse = this.propertyService.getPropertyList(i + 1);
        this.properties = this.propertyReponse.properties;
        //document.body.scrollTop = 0;
        //document.documentElement.scrollTop = 0;
    }
    navigateTo() { }

    viewPropertyDetails(index) {
        this.propertyService.setPropertyId(index);
        this.router.navigate(['/viewproperty']);
    }
}
