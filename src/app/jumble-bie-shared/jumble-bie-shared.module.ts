import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceSliderComponent } from './price-slider/price-slider.component';
import { SlickCarouselForHomeComponent } from './slick-carousel-for-home/slick-carousel-for-home.component';
import { SlickCarouselForDetailComponent } from './slick-carousel-for-detail/slick-carousel-for-detail.component';
import { JbModalComponent, JbFooter } from './jb-modal/jb-modal.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [SlickCarouselForHomeComponent, PriceSliderComponent, SlickCarouselForDetailComponent, JbFooter, JbModalComponent],
    exports: [SlickCarouselForHomeComponent, PriceSliderComponent, SlickCarouselForDetailComponent, JbFooter, JbModalComponent]
})
export class JumbleBieSharedModule { }
