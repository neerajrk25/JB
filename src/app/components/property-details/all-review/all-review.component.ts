import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'property-details-all-reviews',
    templateUrl: './all-review.component.html',
    styles: [
        `
            .back-btn {
                background: white;
                padding: 20px 30px 20px 0;
            }
            .back-btn .fa {
                margin-right: 2px;
            }
        `
    ]
})
// tslint:disable-next-line: component-class-suffix
export class PropertyDetailsAllReviews {

    constructor(private router: Router, private route: ActivatedRoute) { }

    goBackToDetails() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
}
