 interface IQuestionItem {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[];
};

 interface IQuestionsState {
    items: IQuestionItem[];
};

 interface GetQuestions {
    response_code: number;
    results: IQuestionItem[]
}