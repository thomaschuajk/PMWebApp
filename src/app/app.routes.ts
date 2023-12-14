import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddClientComponent } from './add-client/add-client.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';



export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'add-client', component: AddClientComponent },
    { path: 'create-meeting', component: CreateMeetingComponent },
    { path: 'clients-list', component: ClientsListComponent },
    { path: 'meetings-list', component: MeetingsListComponent }
];
