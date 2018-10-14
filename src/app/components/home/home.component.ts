import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SlickSlide } from '../../jumble-bie-shared/slick-slides.model';
import { CommonService } from '../../service/common.service';
import { Router } from '@angular/router';
declare var $;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
    slides: SlickSlide[] = [
        { imagePath: 'assets/images/property-1.jpg', description: 'Mordern Family Home', address: '432 Smith Dr. Balitmore, MD' },
        { imagePath: 'assets/images/property-2.jpg', description: 'Beautiful Waterfront Home', address: '432 Smith Dr. Balitmore, MD' }
    ];
    constructor(private commonService: CommonService, private router: Router) { }

    filter: { price: number[] } = { price: [1000, 5000] };

    ngOnInit() {
        this.filter.price = [this.commonService.filter.min, this.commonService.filter.max];
    }

    ngAfterViewInit() {
        $(function () {
            $(".tabs").tabs({
                create: function (event, ui) {
                    $(this).fadeIn();
                }
            });
        });
    }

    navigateTo() {
        this.commonService.filter = { min: this.filter.price[0], max: this.filter.price[1] };
        this.router.navigate(['/searchproperty']);
    }


}
