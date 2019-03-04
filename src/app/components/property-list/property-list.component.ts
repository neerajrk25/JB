import { Component, OnInit } from '@angular/core';
import { PropertyResponse, PropertyService, Property } from '../property.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { Subscription } from 'rxjs';
declare var $, wNumb;

@Component({
    selector: 'app-property-list',
    templateUrl: './property-list.component.html',
    styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
    propertyReponse = new PropertyResponse();
    properties: Property[] = [];
    pages: Array<number>;
    currentPage: number;
    filter: { price: number[], propertyType: string } = {
        price: [1000, 5000],
        propertyType: "any"
    };
    listSubscription: Subscription;
    constructor(
        private commonService: CommonService,
        private propertyService: PropertyService,
        private router: Router
    ) { }
    ngOnInit() {
        $(function () {
            $(".tabs").tabs({
                create: function (event, ui) {
                    $(this).fadeIn();
                }
            });
        });
        this.filter.price = [this.commonService.filter.min, this.commonService.filter.max];
        this.filter.propertyType = this.commonService.filter.propertyType;
        this.pages = new Array(Math.ceil(this.propertyReponse.totalRecords / 9));
        this.currentPage = 1;
        this.getProperty();
    }

    setPage(i) {
        this.currentPage = i;
        this.getProperty();
        //document.body.scrollTop = 0;
        //document.documentElement.scrollTop = 0;
    }

    getProperty() {
        this.listSubscription = this.propertyService
            .getPropertyList(
                {
                    low: this.filter.price[0],
                    high: this.filter.price[1],
                    page: this.currentPage
                }
            )
            .subscribe(response => {
                this.properties = response.properties;
                this.pages = new Array(Math.ceil(response.totalRecords / 9));
            }, e => {
                this.properties = [
                    {
                        "id": "599e677f-ae24-4855-9ca3-de426b3c361b",
                        "name": "prop1",
                        "address": "lonavala",
                        "capacity": 10,
                        "rooms": 4,
                        "description": "good Place",
                        "type": "bunglaow",
                        "price": 5000,
                        "status": null,
                        "images": [
                            {
                                "id": "8920dd9a-258a-4931-9f6e-40728e80806e",
                                "fileName": "IMG_0197.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0197.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "099a87bd-623a-4d73-8065-e858d6859912",
                                "fileName": "IMG_0209.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0209.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "bb79e46e-d214-4262-8088-882d81f3f291",
                                "fileName": "IMG_0210.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0210.JPG",
                                "byteArrayString": null
                            }
                        ],
                        "comments": [

                        ]
                    },
                    {
                        "id": "0041eaf6-c888-4e18-8853-dbe498b55319",
                        "name": "prop1",
                        "address": "lonavala",
                        "capacity": 10,
                        "rooms": 4,
                        "description": "good Place",
                        "type": "bunglaow",
                        "price": 5000,
                        "status": null,
                        "images": [
                            {
                                "id": "30f9a580-da6c-4002-8b78-9a9026fb8557",
                                "fileName": "DSC_1978.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/DSC_1978.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "5c2be407-f4b3-4fc5-8220-390720131082",
                                "fileName": "DSC_1998.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/DSC_1998.JPG",
                                "byteArrayString": null
                            }
                        ],
                        "comments": [

                        ]
                    },
                    {
                        "id": "e6f75fd2-1228-4dc1-b834-c6b5569f3eb2",
                        "name": "prop1",
                        "address": "lonavala",
                        "capacity": 10,
                        "rooms": 4,
                        "description": "good Place",
                        "type": "bunglaow",
                        "price": 5000,
                        "status": null,
                        "images": [
                            {
                                "id": "ebdd138f-7960-4b43-9c53-74d28acd3b70",
                                "fileName": "DSC_1978.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/DSC_1978.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "07f62dbf-b9e2-4ea9-8963-15e1896c15a6",
                                "fileName": "DSC_1998.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/DSC_1998.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "6292120f-ef59-4fa5-bb43-5a760dc18200",
                                "fileName": "DSC_2022.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/DSC_2022.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "3dd21de2-b88f-4e65-b705-786fb6c12633",
                                "fileName": "DSC_2030.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/DSC_2030.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "91702ced-5ebc-45ac-9551-8d98175e880d",
                                "fileName": "IMG_0197.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0197.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "4ba2db3a-6d33-421f-93da-f423c10d6673",
                                "fileName": "IMG_0198.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0198.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "cb668677-a297-438e-b47c-a800f4041200",
                                "fileName": "IMG_0201.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0201.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "d1b8e30b-7b21-416b-ad7b-a8baba38cfc4",
                                "fileName": "IMG_0202.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0202.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "fe4923b7-0ad2-4361-838a-84d8c4ab9b86",
                                "fileName": "IMG_0209.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0209.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "ec37758e-1ef4-427f-81e9-b2224df070e5",
                                "fileName": "IMG_0210.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0210.JPG",
                                "byteArrayString": null
                            },
                            {
                                "id": "100f2850-c4bc-4725-8cd0-12458518a92d",
                                "fileName": "IMG_0403.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/IMG_0403.JPG",
                                "byteArrayString": null
                            }
                        ],
                        "comments": [

                        ]
                    },
                    {
                        "id": "cce0d97b-ba06-4ea6-a024-db8a017a1f1f",
                        "name": "prop1",
                        "address": "lonavala",
                        "capacity": 10,
                        "rooms": 4,
                        "description": "good Place",
                        "type": "bunglaow",
                        "price": 5000,
                        "status": null,
                        "images": [
                            {
                                "id": "ed11213e-d5db-42f7-9e9d-d754ce1f4ecb",
                                "fileName": "DSC_1998.JPG",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/DSC_1998.JPG",
                                "byteArrayString": null
                            }
                        ],
                        "comments": [

                        ]
                    },
                    {
                        "id": "deffb5e1-d375-4677-825e-f4e20e8dc483",
                        "name": " prop1",
                        "address": "lonavala",
                        "capacity": 10,
                        "rooms": 4,
                        "description": " good Place",
                        "type": " bunglaow",
                        "price": 8000,
                        "status": null,
                        "images": [
                            {
                                "id": "4aeb71ab-f20c-4063-8e5e-93f0f14262b9",
                                "fileName": "20150807_172816.jpg",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/20150807_172816.jpg",
                                "byteArrayString": null
                            },
                            {
                                "id": "0378e561-1d8c-4bb8-a056-0e232f55e94f",
                                "fileName": "20150807_172818.jpg",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/20150807_172818.jpg",
                                "byteArrayString": null
                            }
                        ],
                        "comments": [
                            {
                                "id": "948324e1-55d3-4f46-86c2-570720dd0124",
                                "name": null,
                                "comment": "good",
                                "rating": 1
                            },
                            {
                                "id": "04945184-fa44-476f-b747-b70923c41075",
                                "name": null,
                                "comment": "Nice",
                                "rating": 2
                            }
                        ]
                    },
                    {
                        "id": "0c143884-8f65-492f-a6d3-5412a8ef613e",
                        "name": " prop1",
                        "address": "lonavala",
                        "capacity": 10,
                        "rooms": 4,
                        "description": " good Place",
                        "type": " bunglaow",
                        "price": 8000,
                        "status": null,
                        "images": [
                            {
                                "id": "2482c2b2-5bc8-467d-9109-0f5bc1dae6f5",
                                "fileName": "20150806_082204.jpg",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/20150806_082204.jpg",
                                "byteArrayString": null
                            },
                            {
                                "id": "68df7b5c-0c9e-4ac7-82d0-d1015108f77f",
                                "fileName": "20150807_172803.jpg",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/20150807_172803.jpg",
                                "byteArrayString": null
                            },
                            {
                                "id": "f6364d80-2569-4746-8505-54243e754fc9",
                                "fileName": "20150807_172814.jpg",
                                "fileType": "image/jpeg",
                                "downloadUri": "http://e341b11d.ngrok.io/property/downloadImage/20150807_172814.jpg",
                                "byteArrayString": null
                            }
                        ],
                        "comments": [
                            {
                                "id": "d901ac85-4567-45b0-8777-d8a50f4d2924",
                                "name": null,
                                "comment": "good",
                                "rating": 1
                            },
                            {
                                "id": "848f0520-e496-4e11-a722-f9e8cafb1f53",
                                "name": null,
                                "comment": "Nice",
                                "rating": 2
                            }
                        ]
                    }
                ];
                this.pages = new Array(Math.ceil(6 / 9));;
            });
    }

    viewPropertyDetails(propertyId) {
        this.propertyService.setPropertyId(propertyId);
        this.router.navigate([`/viewproperty/${propertyId}`]);
    }
}
