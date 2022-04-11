import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import * as api from '../../services/api';
import {
    Container,
    Text
} from './styles';

const Home: React.FC = () => {
    const [questions, setQuestions] = useState<IQuestionItem[]>([]);
    useEffect(() => {
        api.getQuestions()
            .then(response => {
                console.log(response);
                setQuestions(response);
            })
    }, [])
    return (
        <Container>
            <QuestionCard/>
        </Container>
    );
};

export default Home;
