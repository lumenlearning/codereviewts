import grader from '../src/grader';
import { Question, Choice, Response } from "../src/types";

describe("grader", () => {
    describe("MULTIPLE_CHOICE", () => {
        const question: Question = {
            questionType: "MULTIPLE_CHOICE",
            prompt: "What is the answer?"
        };
        const choices: Array<Choice> = [
            { key: "A", text: "A", correct: true },
            { key: "B", text: "B", correct: false },
        ];

        it("should return 1.0 for a correct answer", () => {
            expect(grader(question, choices, { keys: ["A"] })).toEqual(1);
        });

        it("should return 0.0 for an incorrect answer", () => {
            expect(grader(question, choices, { keys: ["B"] })).toEqual(0);
        });
    });

    describe("MULTIPLE_ANSWER", () => {
        const question: Question = {
            questionType: "MULTIPLE_ANSWER",
            prompt: "What are the answers?",
        };
        const choices: Array<Choice> = [
            { key: "A", text: "A", correct: true },
            { key: "B", text: "B", correct: false },
            { key: "C", text: "C", correct: true },
        ];

        it("should return 1.0 for a correct answer", () => {
            expect(grader(question, choices, { keys: [ "A", "C" ] })).toEqual(1);
        });

        it("should return 0.0 for a correct answer", () => {
            expect(grader(question, choices, { keys: [ "B" ] })).toEqual(0);
        });

        it("should return a partial score for a partially correct answer", () => {
            expect(grader(question, choices, { keys: [ "A" ] })).toEqual(0.5);
        });
    });
});
