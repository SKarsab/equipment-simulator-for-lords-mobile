export class Question {
    public question: string = "";
    public answer: string = "";
    public colour: string = "";

    constructor (question: string, answer: string, colour: string) {
        this.question = question;
        this.answer = answer;
        this.colour = colour;
    }
}