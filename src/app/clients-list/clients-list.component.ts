import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ClientService } from '../client.service';
import { CommonModule } from '@angular/common';
import { Meeting } from '../model/meeting';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css'
})
export class ClientsListComponent implements OnInit {

  clients!: Client[];
  clientService!: ClientService;

  constructor(clientService: ClientService) {
    this.clientService = clientService;
  }
  ngOnInit(): void {
    this.clients = this.clientService.getAllClients().length > 0 ? this.clientService.getAllClients() : [];
  }


}
