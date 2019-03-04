import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { SlickSlide } from '../slick-slides.model';
import { imageFile } from 'src/app/components/property.service';
declare var $;

@Component({
    selector: 'slick-carousel-for-detail',
    templateUrl: './slick-carousel-for-detail.component.html',
    styleUrls: ['./slick-carousel-for-detail.component.css']
})
export class SlickCarouselForDetailComponent implements AfterViewInit {

    private _slides: SlickSlide[] | imageFile[] = [];
    @Input() get slides(): SlickSlide[] | imageFile[] {
        return this._slides;
    }
    set slides(value: SlickSlide[] | imageFile[]) {
        this._slides = value;
    }

    private _loadSlider;
    get loadSlider() {
        return this._loadSlider;
    }

    @Input() set loadSlider(value) {
        if (value) {
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
        this._loadSlider = value;
    }


    constructor() { }

    ngAfterViewInit() {

    }

}
