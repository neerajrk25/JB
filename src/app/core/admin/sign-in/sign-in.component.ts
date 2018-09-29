import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    signinForm: FormGroup;
    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.signinForm = new FormGroup({
            "email": new FormControl(null, Validators.required),
            "password": new FormControl(null, Validators.required)
        })
    }

    login() {
        localStorage.setItem('token', "1");
        this.router.navigate(["admin/addproperty"]);
    }

}
