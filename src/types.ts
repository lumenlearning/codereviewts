export interface Question {
    readonly questionType: string,
    readonly prompt: string,
}

export interface Choice {
    readonly key: string,
    readonly text: string,
    readonly correct: boolean,
}

export interface Response {
    readonly key: string,
}
