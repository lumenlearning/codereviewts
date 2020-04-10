import { Question, Choice, Response } from "./types";

const grader = (question: Question, choices: Array<Array<Choice>>, response: Response): number => {
    if (question.questionType === "MULTIPLE_CHOICE") {
        const chosenResponse = choices[0].find((choice) => choice.key === response.keys[0]);
        return (chosenResponse && chosenResponse.correct) ? 1.0 : 0.0;
    } else if (question.questionType === "MULTIPLE_ANSWER") {
        const correctResponses = choices[0].filter((choice) => choice.correct);
        const chosenResponses = choices[0].filter((choice) =>
            response.keys.includes(choice.key) && choice.correct);
        return chosenResponses.length / correctResponses.length;
    } else if (question.questionType === "MULTIPLE_DROPDOWNS") {
        const correctResponses = choices.map((dropdownChoice, index) => {
            const currentResponse = response.keys[index];
            const currentChosenChoice = dropdownChoice.find((choice) => currentResponse === choice.key);
            return (currentChosenChoice && currentChosenChoice.correct) ? 1.0 : 0.0;
        }).reduce((sum, resp) => (sum += resp), 0);
        return correctResponses / choices.length;
    } else {
        return 0.0;
    }
}

export default grader;
