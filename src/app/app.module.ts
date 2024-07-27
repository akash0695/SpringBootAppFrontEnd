import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { WebsiteModule } from './website/website.module';

@NgModule({
  declarations: [
    AppComponent,
    FormSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
