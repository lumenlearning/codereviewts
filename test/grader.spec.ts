import grader from '../src/grader';
import { Question, Choice, Response } from "../src/types";

describe("grader", () => {
    describe("MULTIPLE_CHOICE", () => {
        const multipleChoiceQuestion: Question = {
            questionType: "MULTIPLE_CHOICE",
            prompt: "What is the answer?"
        };
        const choices: Array<Choice> = [
            { key: "A", text: "A", correct: true },
            { key: "B", text: "B", correct: false },
        ];

        it("should return 1.0 for a correct answer", () => {
            expect(grader(multipleChoiceQuestion, choices, { key: "A" })).toEqual(1);
        });

        it("should return 0.0 for an incorrect answer", () => {
            expect(grader(multipleChoiceQuestion, choices, { key: "B" })).toEqual(0);
        });
    });
});
