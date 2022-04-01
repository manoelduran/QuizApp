import React, { useEffect, useState } from "react";
import { useSelector, useStore } from "react-redux";
import * as api from '../../services/api';
import { GetQuestions, IQuestionItem, IQuestionsState } from "../../store/modules/questions/types";
import {
    Container, Text
} from './styles';

const Questions: React.FC = () => {
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
            <Text>CATALOGO</Text>
        </Container>
    );
};

export default Questions;