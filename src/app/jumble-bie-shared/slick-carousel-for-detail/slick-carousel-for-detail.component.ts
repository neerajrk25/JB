import { Component, OnInit, AfterViewInit, Input, NgZone, ViewChild } from '@angular/core';
import { SlickSlide } from '../slick-slides.model';
import { imageFile } from 'src/app/components/property.service';
// import { SlideshowComponent } from 'ng-simple-slideshow';
declare var $;

@Component({
    selector: 'slick-carousel-for-detail',
    templateUrl: './slick-carousel-for-detail.component.html',
    styleUrls: ['./slick-carousel-for-detail.component.css']
})
export class SlickCarouselForDetailComponent implements AfterViewInit {

    private _slides: SlickSlide[] | imageFile[] = [];
    private _imageUrlArray: string[] = [];
    get imageUrlArray(): string[] {
        return this._imageUrlArray || [];
    }
    set imageUrlArray(value: string[]) {
        this._imageUrlArray = value;
    }

    get slides(): SlickSlide[] | imageFile[] {
        return this._slides;
    }

    @Input() set slides(value: SlickSlide[] | imageFile[]) {
        let imageUrls: string[] = [];
        this._slides = value;
        // this._slides.forEach((slide) => {
        //     imageUrls.push(slide.downloadUri);
        // });
        for (let i = 0; i < value.length; i++) {
            imageUrls.push(value[i].downloadUri);
        };
        Object.assign(this._imageUrlArray, imageUrls);
    }

    private _loadSlider;
    get loadSlider() {
        return this._loadSlider;
    }

    @Input() set loadSlider(value) {
        // if (value && false) {
        //     $('.slider.slider-property-gallery').slick(
        //         this.gallerySlider
        //     );

        //     $('.property-gallery-pager').on('init', function (event, slick) {
        //         this.zone.runOutsideAngular(() => {
        //             $('.slide-counter').text('1 / ' + slick.slideCount);
        //         });
        //     })

        //     $('.property-gallery-pager').slick(
        //         this.sliderConfig
        //     );

        //     $('.property-gallery-pager').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        //         this.zone.runOutsideAngular(() => {
        //             currentSlide = currentSlide + 1;
        //             var counter = currentSlide + ' / ' + slick.slideCount;
        //             $('.slide-counter').text(counter);
        //         });
        //     })

        //     //INITIATE SLIDES
        //     setTimeout(() => {
        //         $('.slide').addClass('initialized');

        //     }, 0)
        // }
        this._loadSlider = value;
    }

    sliderConfig = {
        // prevArrow: $('.slider-nav-property-gallery .slider-prev'),
        // nextArrow: $('.slider-nav-property-gallery .slider-next'),
        slidesToShow: 5,
        slidesToScroll: 1,
        // asNavFor: '.slider.slider-property-gallery',
        dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true
    };

    gallerySlider = {
        // prevArrow: $('.slider-nav-property-gallery .slider-prev'),
        // nextArrow: $('.slider-nav-property-gallery .slider-next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
        fade: true,
        infinite: true,
        // asNavFor: '.property-gallery-pager'
    };

    @ViewChild('slideshow') slideshowComponent: any;

    constructor(private zone: NgZone) { }

    ngAfterViewInit() {

    }

    afterChange(e) {
        console.log(e);
    }

    onSlide(indexDirection) {
        this.slideshowComponent.onSlide(indexDirection);
    }

}
