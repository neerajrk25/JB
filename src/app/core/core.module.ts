import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedComponentsModule } from '../components/shared-components.module';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './admin/sign-in/sign-in.component';

@NgModule({
    imports: [
        CommonModule,
        SharedComponentsModule,
        RouterModule
    ],
    declarations: [HeaderComponent, FooterComponent, SignInComponent],
    exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
