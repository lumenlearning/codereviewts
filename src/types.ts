export interface Question {
    readonly questionType: string,
    readonly prompt: string,
}

export interface Choice {
    readonly key: string,
    readonly text: string,
    readonly correct: boolean,
    correctOrder?: number,
}

export interface Response {
    readonly keys: Array<string>,
}
