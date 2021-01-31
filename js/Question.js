class Question {
    constructor() {
        this.input1 = createInput("Enter Your Name");
        this.input2 = createInput("Enter Your Answer");
        this.title = createElement("h1");
        this.button = createButton("Submit");
        this.question = createElement("h2");
        this.option1 = createElement("h2");
        this.option2 = createElement("h2");
        this.option3 = createElement("h2");
        this.option4 = createElement("h2");
        this.correct = createElement("h2");

    }
    hide() {
        this.input1.hide();
        this.input2.hide();
    }
    display() {
        this.input1.position(200, 300);
        this.input2.position(500, 300);

        this.title.html("My Quiz App");
        this.title.position(350, 10);

        this.button.position(410, 350);

        this.question.html("What starts and ends with the letter 'E', but has only one letter ?");
        this.question.position(100, 80);
        this.option1.html("1 Everyone");
        this.option1.position(100, 128);
        this.option2.html("2 Envelope");
        this.option2.position(100, 160);
        this.option3.html("3 Estimate");
        this.option3.position(100, 190);
        this.option4.html("4 Eye");
        this.option4.position(100, 220);
        this.button.mousePressed(() => {
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            constestantCount += 1;
            contestant.index = constestantCount;
            contestant.update();
            contestant.updateCount(constestantCount);
            if (contestant.answer === "4") {
                //fill("green");
                this.input1.hide();
                this.input2.hide();

                this.correct.html("CORRECT!!!");
                this.correct.position(400, 300);
            }
            else {
                this.input1.hide();
                this.input2.hide();
                //fill("red");
                this.correct.html("WRONG!!!");
                this.correct.position(400, 300);

                // this.button.mousePressed(()=>{
                // //   if(this.option4===4){
                //     contestant.name = this.input.value();
                //     constestantCount+=1;
                //     contestant.index=playerCount;
                //     contestant.update();
                //     contestant.updateCount(constestantCount);
                //        if(this.option4===4){
                //     fill("green");
                //     this.correct.html("CORRECT ANSWER");
                //     this.correct.position(410,340);
            }
        })
    }
}