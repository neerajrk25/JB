import { Inject, Component, OnInit } from "@angular/core";

@Component({
    selector: 'default-busy',
    template: `
    <div class="loader">
        <span class="text" id="text">Please wait</span>
    </div>
    `,
    styles: [
        `
            .loader .text {
                position: relative;
                top: 60%;
                font-weight: bold;
            }
        `
    ]
})
export class CustomBusyComponent implements OnInit {
    intervalHandler;

    constructor() { };

    ngOnInit() {
        let textEl = document.getElementById('text');
        let count = 0;
        this.intervalHandler = window.setInterval(() => {
            if ((count % 3) == 0) {
                textEl.innerText = 'Please Wait .';
            } else {
                textEl.innerText = textEl.innerText + ' .'
            }
            count++;
            if (count == 50) {
                count = 0;
                textEl.innerText = 'Please Wait';
                window.clearInterval(this.intervalHandler);
            }
        }, 500);
    }

}