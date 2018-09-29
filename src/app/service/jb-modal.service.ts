import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class JbModalService {
    private _isModalVisible: boolean = false;
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

    openModal() {
        this.modalElement.style.display = "block";
    }

    closeModal() {
        this.modalElement.style.display = "none";
    }

    windowClick(event) {
        if (event.target == this.modalElement) {
            this.isModalVisible = false;
        }
    }

    spanClick() {
        this.isModalVisible = false;
    }

    bindEvents() {
        this.modalElement = document.getElementById('myModal');
        this.spanElement = document.getElementById("close");
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