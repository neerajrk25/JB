import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { JumbleBieSharedModule } from "../jumble-bie-shared/jumble-bie-shared.module";
import { PropertyListComponent } from './property-list/property-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, JumbleBieSharedModule, RouterModule, FormsModule],
    declarations: [HomeComponent, PropertyListComponent, PropertyDetailsComponent, AdminPageComponent, AddPropertyComponent],
    exports: [HomeComponent, PropertyListComponent, PropertyDetailsComponent]
})
export class SharedComponentsModule { }