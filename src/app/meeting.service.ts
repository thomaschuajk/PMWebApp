import { Injectable } from '@angular/core';
import { Meeting } from './model/meeting';
import { Client } from './model/client';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  meetings!: Meeting[];
  client!: Client;

  constructor() {
    this.meetings = new Array<Meeting>();
  }
  getAllMeetings(): Meeting[] {
    return this.meetings;
  }
  createMeeting(client: string, topic: string, paxNum: string, startTime: string): void {
    let new_meeting = new Meeting(client, topic, paxNum, startTime);
    this.meetings.push(new_meeting);
  }
  deleteMeeting(startTime: string, topic: string) {

    const index = this.meetings.findIndex(meeting => meeting.topic === topic && meeting.startTime === startTime);
    if (index > -1) {
      this.meetings.splice(index, 1);
    }
  }
}
