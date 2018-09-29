import { Component, OnInit, Input, EventEmitter, Output, ContentChildren } from '@angular/core';
import { JbModalService } from '../../service/jb-modal.service';


@Component({
    selector: 'jb-footer',
    template: '<ng-content></ng-content>'
})
export class JbFooter { }

@Component({
    selector: 'app-jb-modal',
    templateUrl: './jb-modal.component.html',
    styleUrls: ['./jb-modal.component.css']
})
export class JbModalComponent implements OnInit {

    @Input('header') header: string = '';

    @Output('onOpen') onOpen = new EventEmitter();

    @Output('onClose') onClose = new EventEmitter();

    @ContentChildren(JbFooter, { descendants: false }) footerFacet;

    windowElement;

    spanElement: Element;

    modalElement;

    constructor(
        private jbModalService: JbModalService
    ) { }

    ngOnInit() {
    }
}