export class Message {
    value: string;
    statusSending: boolean;

    constructor(value) {
        this.value = value;
        this.statusSending = false;
    }
}