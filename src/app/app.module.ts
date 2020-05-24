import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowModule } from 'ng-simple-slideshow';
import { AppComponent } from './app.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { HomeComponent } from './components/home/home.component';
import { PropertyDetailsAllReviews } from './components/property-details/all-review/all-review.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { SharedComponentsModule } from './components/shared-components.module';
import { SignInComponent } from './core/admin/sign-in/sign-in.component';
import { CoreModule } from './core/core.module';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { RouteGaurdService } from './service/route-gaurd.service';

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
  { path: 'viewproperty/:propertyId/allreviews', component: PropertyDetailsAllReviews },
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
    SlideshowModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    RouteGaurdService,
    HttpInterceptorService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
