import { Injectable } from '@angular/core';
import { Client } from './model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients!: Client[];

  constructor() {
    this.clients = new Array<Client>();

  }
  getAllClients = (): Client[] => {
    return this.clients;
  }
  addClient = (name: string, email: string, address: string, password: string): void => {
    let new_client: Client = new Client(name, email, address, password);
    this.clients.push(new_client);
  }
}
