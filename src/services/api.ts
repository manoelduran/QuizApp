import axios from "axios";
import { GetQuestions } from "../store/modules/questions/types";

export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10',
})

export const getQuestions = async  ()  =>  {
    const response = await api.get<GetQuestions>('https://opentdb.com/api.php?amount=30&category=18&difficulty=easy&type=multiple')
return response.data.results;
};
