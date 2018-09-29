import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-jb-modal',
    templateUrl: './jb-modal.component.html',
    styleUrls: ['./jb-modal.component.css']
})
export class JbModalComponent implements OnInit {

    @Input('header') header: string = '';

    @Output('onOpen') onOpen = new EventEmitter();

    @Output('onClose') onClose = new EventEmitter();

    constructor() { }

    ngOnInit() {
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementById("close");

        // When the user clicks on the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

}
