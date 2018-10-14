import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JbModalService } from '../../service/jb-modal.service';
import { JbNotifyService } from '../../service/jb-notify.service';
import { PropertyService } from '../property.service';
import { Subscription } from 'rxjs';

class Amenities {
    isPool = true;
    isAirConditioner = true;
    isOperativeKitchen = true;
    isExtraMateress = true;
    isTelevision = true;
    isInverter = true;
    isFridge = true;
    isGeyser = true;
    isChef = true;
}

class AddProperty {
    "name" = "asdasd";
    "address" = "asda";
    "price" = 12;
    "rooms" = 12;
    "description" = "asd";
    "capacity" = 123;
    "amenities" = new Amenities();
    "commentsToAdd" = [{ "rating": 1, "comment": "good" }, { "rating": 2, "comment": "Nice" }];
    "imagesToAdd" = [];
    "status" = 'ACTIVE';
    "type" = 'apartment';
}

class DropdownData {
    "propertyTypes" = [
        { label: 'Apartment', value: 'apartment' }
    ];
    "amenities" = [
        { label: 'Swimming Pool', value: 'isPool' },
        { label: 'Air Conditioning', value: 'isAirConditioner' },
        { label: 'Operative Kitchen', value: 'isOperativeKitchen' },
        { label: 'Extra Materess', value: 'isExtraMateress' },
        { label: 'Television', value: 'isTelevision' },
        { label: 'Inverter', value: 'isInverter' },
        { label: 'Fridge', value: 'isFridge' },
        { label: 'Geyser', value: 'isGeyser' },
        { label: 'Chef', value: 'isChef' }
    ]
}

@Component({
    selector: 'app-add-property',
    templateUrl: './add-property.component.html',
    styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
    currentIndex = 1;
    addPropertyForm = new AddProperty();
    dropdownData = new DropdownData();
    addPropertySubscription: Subscription;

    fileList: File[] = [];
    isModalVisible: boolean = false;

    selectedFile: any = {};

    amenities

    @ViewChild('fileInput') fileInput: ElementRef;

    constructor(
        private sanitizer: DomSanitizer,
        private jbModalService: JbModalService,
        private jbNotifyService: JbNotifyService,
        private propertyService: PropertyService
    ) { }

    ngOnInit() {
        //this.jbNotifyService.alertMessage('I am ready to rock');
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
        //this.fileList = Object.assign([]);
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            if (this.validate(file)) {
                if (this.isImage(file)) {
                    file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                }
                this.fileList.push(files[i]);
            } else {
                let warningMessage = `${file.name} is not a valid file!`;
                this.jbNotifyService.warningMessage(warningMessage);
            }
        }
        this.fileInput.nativeElement.value = null;
    }

    validate(file: File): boolean {
        return file.type.indexOf('image') !== -1;
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
        this.jbNotifyService.successMessage('File deleted');
        this.hideModal();
    }

    submitProperty() {
        //console.log(this.addPropertyForm, this.fileList);
        let formToSend = new FormData();
        //this.addPropertyForm.imagesToAdd = this.fileList;
        for (let key in this.addPropertyForm) {
            let value = this.addPropertyForm[key];
            // if (typeof (this.addPropertyForm[key]) == 'object') {
            //     value = JSON.stringify(this.addPropertyForm[key]);
            // }
            if (typeof (this.addPropertyForm[key]) == 'object' && key == 'imagesToAdd') {
                for (let j = 0; j < this.fileList.length; j++) {
                    if (j == 0) {
                        formToSend.set('imagesToAdd', this.fileList[j]);
                    } else {
                        formToSend.append('imagesToAdd', this.fileList[j], this.fileList[j].name);
                    }
                }
            } else if (typeof (this.addPropertyForm[key]) == 'object' && key !== 'imagesToAdd') {
                formToSend.set(key, JSON.stringify(this.addPropertyForm[key]));
            } else {
                formToSend.set(key, value);

            }
        }
        this.addPropertySubscription = this.propertyService.addProperty(formToSend).subscribe(() => {
        }, () => {
        });
    }
}
