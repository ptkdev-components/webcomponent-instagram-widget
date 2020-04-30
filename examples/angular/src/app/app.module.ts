import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PtkdevInstagramWidgetWcComponent } from './components/ptkdev-instagram-widget-wc/ptkdev-instagram-widget-wc.component';
import { ReactiveFormsModule } from '@angular/forms';
import '@ptkdev/webcomponent-instagram-widget';

@NgModule({
  declarations: [
    AppComponent,
    PtkdevInstagramWidgetWcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
