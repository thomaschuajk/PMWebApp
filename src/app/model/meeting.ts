export class Meeting {
    client: string;
    topic: string;
    paxNum: string;
    startTime: string;

    /**
     *
     */
    constructor(client: string, topic: string, paxNum: string, startTime: string) {
        this.client = client;
        this.topic = topic;
        this.paxNum = paxNum;
        this.startTime = startTime;
    }

}
