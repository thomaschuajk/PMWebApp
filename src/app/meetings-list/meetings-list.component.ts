import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Meeting } from '../model/meeting';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-meetings-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './meetings-list.component.html',
  styleUrl: './meetings-list.component.css'
})
export class MeetingsListComponent implements OnInit {

  meetings!: Meeting[];
  meetingService!: MeetingService;

  constructor(meetingService: MeetingService) {
    this.meetingService = meetingService
  }
  ngOnInit(): void {
    this.meetings = this.meetingService.getAllMeetings().length > 0 ? this.meetingService.getAllMeetings() : []
  }
  removeMeeting(meetingStartTime: string, meetingTopic: string) {
    this.meetingService.deleteMeeting(meetingStartTime, meetingTopic)
  }

}
