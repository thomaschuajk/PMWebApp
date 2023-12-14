import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MeetingService } from '../meeting.service';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-create-meeting',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-meeting.component.html',
  styleUrl: './create-meeting.component.css'
})
export class CreateMeetingComponent implements OnInit {
  clientService!: ClientService;
  meetingForm!: FormGroup;
  meetingService!: MeetingService;
  router!: Router;
  clientsNames!: string[];


  constructor(private fb: FormBuilder, meetingService: MeetingService, clientService: ClientService, router: Router) {
    this.meetingForm = this.fb.group(
      {
        meetingClientName: ['', [Validators.required]],
        meetingTopic: ['', [Validators.required, Validators.minLength(3)]],
        meetingPaxNum: ['', [Validators.required]],
        meetingTime: ['', [Validators.required]]
      }
    )
    this.clientService = clientService;
    this.meetingService = meetingService;
    this.router = router
  }

  ngOnInit(): void {
    let clients = this.clientService.getAllClients();
    this.clientsNames = clients.map(client => client.name);
  }


  createMeeting(): void {
    this.meetingService.createMeeting(this.meetingForm.value.meetingClientName, this.meetingForm.value.meetingTopic, this.meetingForm.value.meetingPaxNum, this.meetingForm.value.meetingTime);
    console.log('Meeting Created');
    this.router.navigate(['']);
  }

}
