import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './core/admin/sign-in/sign-in.component';
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'admin', component: AdminPageComponent, canActivate: [RouteGaurdService], children: [
            { path: 'addproperty', component: AddPropertyComponent }
        ]
    },
    { path: 'searchproperty', component: PropertyListComponent },
    { path: 'viewproperty', component: PropertyDetailsComponent },
    { path: 'viewproperty/:propertyId', component: PropertyDetailsComponent },
    { path: 'signin', component: SignInComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        SharedComponentsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        RouteGaurdService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
