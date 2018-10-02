import { Inject, Component } from "@angular/core";

@Component({
    selector: 'default-busy',
    template: `
    <div class="loader">
        <span class="text">Please wait . . .</span>
    </div>
    `,
    styles: [
        `
            .loader .text {
                position: relative;
                top: 60%;
            }
        `
    ]
})
export class CustomBusyComponent {
    constructor() { };
}