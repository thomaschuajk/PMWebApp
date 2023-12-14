import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddClientComponent } from './add-client/add-client.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { ClientsListComponent } from './clients-list/clients-list.component'
import { ClientService } from './client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';

@NgModule({

    declarations: [
        AppComponent,
        AddClientComponent,
        CreateMeetingComponent,
        ClientsListComponent,
        MeetingsListComponent
    ],
    providers: [ClientService, provideRouter(routes, withComponentInputBinding())],
    imports: [CommonModule, FormsModule, BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule { }