import { Component, OnInit, Input, EventEmitter, Output, ContentChildren } from '@angular/core';
import { JbModalService } from '../../service/jb-modal.service';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'jb-footer',
    template: '<ng-content></ng-content>'
})
// tslint:disable-next-line: component-class-suffix
export class JbFooter { }

@Component({
    selector: 'app-jb-modal',
    templateUrl: './jb-modal.component.html',
    styleUrls: ['./jb-modal.component.css']
})
export class JbModalComponent implements OnInit {

    @Input('header') header = '';

    // tslint:disable-next-line: no-output-on-prefix
    @Output('onOpen') onOpen = new EventEmitter();

    // tslint:disable-next-line: no-output-on-prefix
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
