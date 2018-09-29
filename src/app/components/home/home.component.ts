import { Component, AfterViewInit } from '@angular/core';
import { SlickSlide } from '../../jumble-bie-shared/slick-slides.model';
import { CommonService } from '../../service/common.service';
import { Router } from '@angular/router';
declare var $;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    slides: SlickSlide[] = [
        { imagePath: 'assets/images/property-1.jpg', description: 'Mordern Family Home', address: '432 Smith Dr. Balitmore, MD' },
        { imagePath: 'assets/images/property-2.jpg', description: 'Beautiful Waterfront Home', address: '432 Smith Dr. Balitmore, MD' }
    ];
    constructor(private commonService: CommonService, private router: Router) { }

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
        this.router.navigate(['/searchproperty']);
    }


}
