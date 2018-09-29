import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { SlickSlide } from '../slick-slides.model';
declare var $;

@Component({
    selector: 'slick-carousel-for-detail',
    templateUrl: './slick-carousel-for-detail.component.html',
    styleUrls: ['./slick-carousel-for-detail.component.css']
})
export class SlickCarouselForDetailComponent implements AfterViewInit {
    @Input() slides: SlickSlide[] = [];
    constructor() { }

    ngAfterViewInit() {
        $('.slider.slider-property-gallery').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            fade: true,
            infinite: true,
            asNavFor: '.property-gallery-pager'
        });

        $('.property-gallery-pager').on('init', function (event, slick) {
            $('.slide-counter').text('1 / ' + slick.slideCount);
        });

        $('.property-gallery-pager').slick({
            prevArrow: $('.slider-nav-property-gallery .slider-prev'),
            nextArrow: $('.slider-nav-property-gallery .slider-next'),
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider.slider-property-gallery',
            dots: false,
            focusOnSelect: true,
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true
        });

        $('.property-gallery-pager').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            currentSlide = currentSlide + 1;
            var counter = currentSlide + ' / ' + slick.slideCount;
            $('.slide-counter').text(counter);
        });

        //INITIATE SLIDES
        $('.slide').addClass('initialized');
    }

}
