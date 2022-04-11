import axios from "axios";

export const api = axios.create({
    baseURL: 'https://opentdb.com/',
})

export const getQuestions = async  ()  =>  {
    const response = await api.get<GetQuestions>('api.php?amount=10&category=18&difficulty=easy&type=multiple')
return response.data.results;
};

// https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple

// https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple