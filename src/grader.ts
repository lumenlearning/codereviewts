import { Question, Choice, Response } from "./types";

const grader = (question: Question, choices: Array<Choice>, response: Response): number => {
    if (question.questionType === "MULTIPLE_CHOICE") {
        const chosenResponse = choices.find((choice) => choice.key === response.keys[0]);
        return (chosenResponse && chosenResponse.correct) ? 1.0 : 0.0;
    } else if (question.questionType === "MULTIPLE_ANSWER") {
        const correctResponses = choices.filter((choice) => choice.correct);
        const chosenResponses = choices.filter((choice) =>
            response.keys.includes(choice.key) && choice.correct);
        return chosenResponses.length / correctResponses.length;
    } else {
        return 0.0;
    }
}

export default grader;
