import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { ClientsListComponent } from './clients-list/clients-list.component'
import { routes } from './app.routes';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, AddClientComponent, CreateMeetingComponent, ClientsListComponent, MeetingsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'c1-proj';

}
