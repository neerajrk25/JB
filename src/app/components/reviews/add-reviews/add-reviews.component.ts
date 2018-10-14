import { Component, OnInit, Input } from '@angular/core';

class Review {
    comment: string = null;
    rating: number = 0;
    name: string = null;
}

@Component({
    selector: 'jb-add-reviews',
    templateUrl: './add-reviews.component.html',
    styleUrls: ['./add-reviews.component.css']
})
export class AddReviewsComponent implements OnInit {
    @Input() isAdmin = true;

    @Input() showDivider = false;

    @Input() showAddBtn = false;

    reviewsForm: Review[] = [];

    constructor() { }

    ngOnInit() {
        this.reviewsForm.push(new Review());
    }

    addMoreReviews() {
        this.reviewsForm.push(new Review());
    }

    removeReview(index: number) {
        this.reviewsForm.splice(index, 1);
    }

    clearReview(index: number) {
        this.reviewsForm[index] = new Review();
    }

    addCustomerReview() { }
}
