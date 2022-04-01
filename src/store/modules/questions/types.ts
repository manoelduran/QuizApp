export interface IQuestionItem {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: [];
};

export interface IQuestionsState {
    items: IQuestionItem[];
};

export interface GetQuestions {
    response_code: number;
    results: IQuestionItem[]
}