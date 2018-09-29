import { Component, OnInit, OnDestroy } from '@angular/core';
import { fadeAnimation } from './app.routing.animation';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
declare var $;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [fadeAnimation]
})
export class AppComponent implements OnInit, OnDestroy {
	subscription: Subscription;
    constructor(private router: Router) {
        //router.events.forEach((event) => {
        //    if (event instanceof NavigationEnd) {
        //        $('body,html').animate({
        //            scrollTop: 0
        //        }, 800);
        //    }
        //});
    }
    ngOnInit() {
		this.subscription = this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		).subscribe(() => {
			$('body,html').animate({
                scrollTop: 0
            }, 800);
		})
        // $(document).ready(function () {
        //     $(window).scroll(function () {
        //         if ($(this).scrollTop() > window.innerHeight) {
        //             $('#btn-go-to-top').fadeIn();
        //         } else {
        //             $('#btn-go-to-top').fadeOut();
        //         }
        //     });
        //     $('body,html').animate({
        //         scrollTop: 0
        //     }, 800);
        //     $('#btn-go-to-top').click(function () {
        //         $('body,html').animate({
        //             scrollTop: 0
        //         }, 800);
        //         return false;
        //     });
        // });
    }
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
