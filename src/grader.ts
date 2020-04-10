import { Question, Choice, Response } from "./types";

const grader = (question: Question, choices: Array<Choice>, response: Response): number => {
    if (question.questionType === "MULTIPLE_CHOICE") {
        const chosenResponse = choices.find((choice) => choice.key === response.key);
        return (chosenResponse && chosenResponse.correct) ? 1.0 : 0.0;
    } else {
        return 0.0;
    }
}

export default grader;
