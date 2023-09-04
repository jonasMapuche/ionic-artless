export class Message {

    id: number;
    sender: number;
    message: string;

    constructor(id: number, sender: number, message: string) {
        this.id=id;
        this.sender=sender;
        this.message=message;
    }

    getMessage() {
        return this.message;
    }
}