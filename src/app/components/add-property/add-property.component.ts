import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-add-property',
    templateUrl: './add-property.component.html',
    styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
    currentIndex = 1;
    addPropertyForm: FormGroup;

    constructor() { }

    ngOnInit() {
        this.addPropertyForm = new FormGroup({

        });
    }

}
