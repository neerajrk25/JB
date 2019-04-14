import { Injectable } from '@angular/core';
declare var $;

@Injectable({ providedIn: 'root' })
export class JbModalService {
    private _isModalVisible: boolean = false;
    dismissableMask: boolean = false;
    modalElement: any;
    spanElement: HTMLElement;

    public get isModalVisible(): boolean {
        return this._isModalVisible;
    }
    public set isModalVisible(value: boolean) {
        if (value) {
            this.bindEvents();
        } else {
            this.unbindEvents();
        }
        this._isModalVisible = value;
    }

    onOpen: Function;

    onClose: Function;

    openModal() {
        this.modalElement.style.display = 'block';
        $('body').addClass('modal-open');
        if (this.onOpen) {
            this.onOpen();
        }
    }

    closeModal() {
        this.modalElement.style.display = 'none';
        $('body').removeClass('modal-open');
        if (this.onClose) {
            this.onClose();
        }
    }

    windowClick(event) {
        if (event.target == this.modalElement && this.dismissableMask) {
            this.isModalVisible = false;
        }
    }

    spanClick() {
        this.isModalVisible = false;
    }

    bindEvents() {
        this.modalElement = document.getElementById('myModal');
        this.spanElement = document.getElementById('close');
        window.addEventListener('click', this.windowClick.bind(this));
        this.spanElement.addEventListener('click', this.spanClick.bind(this));
        this.openModal();
    }

    unbindEvents() {
        window.removeEventListener('click', this.windowClick.bind(this));
        this.spanElement.removeEventListener('click', this.spanClick.bind(this));
        this.closeModal();
    }
}