import axios from "axios";
import { GetQuestions } from "../store/modules/questions/types";

export const api = axios.create({
    baseURL: 'https://opentdb.com/',
})

export const getQuestions = async  ()  =>  {
    const response = await api.get<GetQuestions>('api.php?amount=1&category=18&difficulty=easy&type=multiple')
return response.data.results;
};
