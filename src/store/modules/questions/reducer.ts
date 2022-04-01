import { Reducer } from "redux";
import { IQuestionItem, IQuestionsState } from "./types";

const INITIAL_STATE: IQuestionsState = {
    items: []
}

const questions: Reducer<IQuestionsState> = () => {
    return INITIAL_STATE;
}

export default questions;