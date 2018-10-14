import { Component, OnInit } from '@angular/core';
import { PropertyResponse, PropertyService, Property } from '../property.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
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
    filter: { price: number[] } = { price: [1000, 5000] };
    constructor(private commonService: CommonService, private propertyService: PropertyService, private router: Router) { }
    ngOnInit() {
        $(function () {
            $(".tabs").tabs({
                create: function (event, ui) {
                    $(this).fadeIn();
                }
            });
        });
        this.filter.price = [this.commonService.filter.min, this.commonService.filter.max];
        this.propertyReponse = this.propertyService.getPropertyList(1);
        this.properties = this.propertyReponse.properties;
        this.pages = new Array(Math.ceil(this.propertyReponse.totalRecords / 9));
        this.currentPage = 1;
    }

    setPage(i) {
        this.currentPage = i;
        this.propertyReponse = this.propertyService.getPropertyList(i);
        this.properties = this.propertyReponse.properties;
        //document.body.scrollTop = 0;
        //document.documentElement.scrollTop = 0;
    }
    navigateTo() { }

    viewPropertyDetails(propertyId) {
        this.propertyService.setPropertyId(propertyId);
        this.router.navigate([`/viewproperty/${propertyId}`]);
    }
}
