import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { JumbleBieSharedModule } from '../jumble-bie-shared/jumble-bie-shared.module';
import { PropertyListComponent } from './property-list/property-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddReviewsComponent } from './reviews/add-reviews/add-reviews.component';
import { PropertyDetailsAllReviews } from './property-details/all-review/all-review.component';

@NgModule({
    imports: [CommonModule, JumbleBieSharedModule, RouterModule, FormsModule, ReactiveFormsModule,],
    // tslint:disable-next-line: max-line-length
    declarations: [HomeComponent, PropertyListComponent, PropertyDetailsComponent, PropertyDetailsAllReviews, AdminPageComponent, AddPropertyComponent, ReviewsComponent, AddReviewsComponent],
    exports: [HomeComponent, PropertyListComponent, PropertyDetailsComponent, PropertyDetailsAllReviews, AddReviewsComponent]
})
export class SharedComponentsModule { }
