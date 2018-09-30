import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { JbModalService } from '../../service/jb-modal.service';

class Amenities {
    isPool = false;
    isCareTake = false;
    isAirConditioner = false;
    isOven = false;
}

@Component({
    selector: 'app-add-property',
    templateUrl: './add-property.component.html',
    styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
    currentIndex = 2;
    addPropertyForm: FormGroup;

    fileList: File[] = [];
    isModalVisible: boolean = false;

    selectedFile: any = {};

    amenities

    @ViewChild('fileInput') fileInput: ElementRef;

    constructor(
        private sanitizer: DomSanitizer,
        private jbModalService: JbModalService
    ) { }

    ngOnInit() {
        this.addPropertyForm = new FormGroup({

        });
    }

    onClickNext() {
        this.currentIndex++;
    }

    onClickPrevious() {
        this.currentIndex--;
    }

    onTabClick(index: number) {
        this.currentIndex = index;
    }

    onFileSelect(event) {
        let files: any[] = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        this.fileList = [];
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            if (this.validate(file)) {
                if (this.isImage(file)) {
                    file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                }
                this.fileList.push(files[i]);
            }
        }
        this.fileInput.nativeElement.value = null;
    }

    validate(file: File): boolean {
        return true;
    }

    isImage(file: File): boolean {
        return /^image\//.test(file.type);
    }

    deleteFile(file, index) {
        this.jbModalService.isModalVisible = true;
        this.selectedFile.file = file;
        this.selectedFile.index = index;
    }

    hideModal() {
        this.jbModalService.isModalVisible = false;
    }

    removeFile() {
        this.fileList.splice(this.selectedFile.index, 1);
        this.hideModal();
    }
}
