import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SlickSlide } from '../../jumble-bie-shared/slick-slides.model';
import { PropertyService, Property, imageFile } from '../property.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JbModalService } from 'src/app/service/jb-modal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $, moment;

@Component({
    selector: 'app-property-details',
    templateUrl: './property-details.component.html',
    styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit, AfterViewInit {
    slides: SlickSlide[] | imageFile[] = [];

    propertyId: string;

    rating = 3;

    ratingArr = new Array(5);

    propertyDetails: Property;
    loadSlider: boolean;
    detailsForm: FormGroup;
    bookingDate = moment(new Date()).format('YYYY-MM-DD hh:mm a');
    @ViewChild('datetimepicker') datetimepicker: ElementRef;

    constructor(
        private propertyService: PropertyService,
        private route: ActivatedRoute,
        private router: Router,
        private jbModalService: JbModalService,
    ) { }

    ngOnInit() {
        this.route.params.subscribe((param: Params) => {
            this.propertyId = param['propertyId'];
            this.getPropertyById();
        });
        this.initDetailsForm();
    }

    ngAfterViewInit() {
        $(this.datetimepicker.nativeElement).datetimepicker({
            format: 'yyyy-mm-dd HH:ii p',
            startDate: moment(new Date()).format('YYYY-MM-DD hh:mm a'),
            autoclose: true,
            todayBtn: true,
            showMeridian: true,
            pickerPosition: 'bottom-left'
        });
        $(this.datetimepicker.nativeElement).datetimepicker().on('changeDate', (ev) => {
            if (ev.date.valueOf()) {
                const patch = {
                    bookingDate: moment(ev.date.valueOf()).format('YYYY-MM-DD hh:mm a')
                };
                this.bookingDate = moment(ev.date.valueOf()).format('YYYY-MM-DD hh:mm a');
                this.detailsForm.patchValue(patch);
                $(this.datetimepicker.nativeElement).datetimepicker('update');
            }
        });
    }

    initDetailsForm() {
        this.detailsForm = new FormGroup({
            'name': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
            'mobileNumber': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
            // tslint:disable-next-line: max-line-length
            'emailId': new FormControl(null, [Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')]),
            'bookingDate': new FormControl(moment(new Date()).format('YYYY-MM-DD hh:mm a'), [Validators.required]),
        });
        this.bookingDate = moment(new Date()).format('YYYY-MM-DD hh:mm a');
    }

    getPropertyById() {
        this.propertyService.getPropertyById(this.propertyId).subscribe((response) => {
            this.propertyDetails = response;
            this.slides = this.propertyDetails.images;
            this.loadSlider = true;
        }, e => {
            this.propertyDetails = {
                'id': '599e677f-ae24-4855-9ca3-de426b3c361b',
                'name': 'prop1',
                'address': 'lonavala',
                'capacity': 10,
                'rooms': 4,
                'description': 'good Place',
                'type': 'bunglaow',
                'price': 5000,
                'status': null,
                'images': [
                    {
                        'id': '8920dd9a-258a-4931-9f6e-40728e80806e',
                        'fileName': 'IMG_0197.JPG',
                        'fileType': 'image/jpeg',
                        'downloadUri': 'https://picsum.photos/200/300/?random',
                        'byteArrayString': null
                    },
                    {
                        'id': '099a87bd-623a-4d73-8065-e858d6859912',
                        'fileName': 'IMG_0209.JPG',
                        'fileType': 'image/jpeg',
                        'downloadUri': 'https://picsum.photos/200/300/?random',
                        'byteArrayString': null
                    },
                    {
                        'id': 'bb79e46e-d214-4262-8088-882d81f3f291',
                        'fileName': 'IMG_0210.JPG',
                        'fileType': 'image/jpeg',
                        'downloadUri': 'https://picsum.photos/200/300/?random',
                        'byteArrayString': null
                    }
                ],
                'comments': []
            };
            this.propertyDetails.images.forEach((value, index) => {
                value.downloadUri = 'https://picsum.photos/200/300?image=' + (index * 100);
            });
            this.slides = this.propertyDetails.images;
            setTimeout(() => {
                this.loadSlider = true;
            }, 0);
        });
    }

    moreReviews() {
        this.router.navigate(['allreviews'], { relativeTo: this.route });
    }

    bookNow() {
        this.jbModalService.onOpen = () => {
            this.initDetailsForm();
        };
        this.jbModalService.isModalVisible = true;
    }

    submitDetails() {

    }
    hideModal() {
        this.jbModalService.isModalVisible = false;

    }
}
