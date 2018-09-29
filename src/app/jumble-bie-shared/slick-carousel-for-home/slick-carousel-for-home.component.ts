import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { SlickSlide } from '../slick-slides.model';
declare var $;

@Component({
    selector: 'slick-carousel-for-home',
    templateUrl: './slick-carousel-for-home.component.html',
    styleUrls: ['./slick-carousel-for-home.component.css']
})
export class SlickCarouselForHomeComponent implements AfterViewInit, OnDestroy {
    @Input() slides: SlickSlide[] = [];

    constructor() { }

    ngAfterViewInit() {
        setTimeout(() => {
            $('.slider.slider-simple').slick({
                arrows: false,
                adaptiveHeight: true,
                fade: true,
                autoplay: false,
                infinite: true
            });
            //INITIATE SLIDES
            $('.slide').addClass('initialized');
        }, true);
    }

    ngOnDestroy() {
        $('.slider.slider-simple').slick('unslick');
    }

}
