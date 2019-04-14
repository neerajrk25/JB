import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    @Input() isAdmin = true;

    @Input() showDivider = false;

    @Input() showAddBtn = false;

    private _reviews = [
        {
            'id': '948324e1-55d3-4f46-86c2-570720dd0124',
            'comment': 'This site offers the best properties in town. Good stay :)',
            'rating': 1,
            'reviwerName': 'Neeraj Khandelwal'
        },
        {
            'id': '04945184-fa44-476f-b747-b70923c41075',
            'comment': 'Nice',
            'rating': 2,
            'reviwerName': 'ABC'
        },
        {
            'id': '04945184-fa44-476f-b747-b70923c41075',
            'comment': 'Nice',
            'rating': 2,
            'reviwerName': 'ABC'
        },
        {
            'id': '04945184-fa44-476f-b747-b70923c41075',
            'comment': 'Nice',
            'rating': 0,
            'reviwerName': 'ABC'
        },
        {
            'id': '04945184-fa44-476f-b747-b70923c41075',
            'comment': 'Nice',
            'rating': 2,
            'reviwerName': 'ABC'
        }
    ];

    public get reviews() {
        return this._reviews;
    }

    @Input() public set reviews(value) {
        this._reviews = value;
    }

    constructor() { }

    ngOnInit() {
    }

    getRatingList(rating: number): boolean[] {
        const isRating: boolean[] = [];
        for (let i = 0; i < 5; i++) {
            let value = false;
            if (i < rating) {
                value = true;
            }
            isRating.push(value);
        }
        return isRating;
    }

}
