import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceSliderComponent } from './price-slider/price-slider.component';
import { SlickCarouselForHomeComponent } from './slick-carousel-for-home/slick-carousel-for-home.component';
import { SlickCarouselForDetailComponent } from './slick-carousel-for-detail/slick-carousel-for-detail.component';
import { JbModalComponent, JbFooter } from './jb-modal/jb-modal.component';
import { RatingComponent } from './rating/rating.component';
import { NgBusyModule, BusyConfig, BUSY_CONFIG_DEFAULTS } from 'ng-busy';
import { CustomBusyComponent } from './custom-busy/custom-busy.component';
const busyConfig: BusyConfig = {
    message: BUSY_CONFIG_DEFAULTS.message,
    backdrop: true,
    template: CustomBusyComponent,
    delay: 200,
    minDuration: 600,
    wrapperClass: BUSY_CONFIG_DEFAULTS.wrapperClass,
    disableAnimation: false
};
@NgModule({
    imports: [
        CommonModule,
        NgBusyModule.forRoot(busyConfig)
    ],
    declarations: [
        SlickCarouselForHomeComponent,
        PriceSliderComponent,
        SlickCarouselForDetailComponent,
        JbFooter,
        JbModalComponent,
        CustomBusyComponent,
        RatingComponent
    ],
    entryComponents: [
        CustomBusyComponent
    ],
    exports: [
        SlickCarouselForHomeComponent,
        PriceSliderComponent,
        SlickCarouselForDetailComponent,
        JbFooter,
        JbModalComponent,
        NgBusyModule,
        CustomBusyComponent,
        RatingComponent
    ]
})
export class JumbleBieSharedModule { }
