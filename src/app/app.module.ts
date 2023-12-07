import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { MeetingFormComponent } from './meeting-form/meeting-form.component'

@NgModule({

    declarations: [
        AppComponent,
        ClientFormComponent,
        MeetingFormComponent
    ],
    imports: [BrowserModule],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }