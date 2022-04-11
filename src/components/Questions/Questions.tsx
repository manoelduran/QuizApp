import React, { useEffect, useState } from "react";
import { TouchableOpacityProps } from "react-native";
import { useSelector, useStore } from "react-redux";
import * as api from '../../services/api';
import { GetQuestions, IQuestionItem } from "../../store/modules/questions/types";
import {
    Container,
    Title,
    QuestionContainer,
    QuestionName,
    QuestionCategory,
    QuestionType,
} from './styles';

interface CharacterCardProps extends TouchableOpacityProps {
    index: number;
};

const Questions: React.FC = ({index, ...rest}: CharacterCardProps) => {
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
            <Title>Select your Question Type</Title>
            {questions.map((question: IQuestionItem, key) => (
                <QuestionContainer key={key} index={index} {...rest}>
                    <QuestionName>{question.question} </QuestionName>
                    <QuestionCategory>{question.category} </QuestionCategory>
                    <QuestionType>{question.type} </QuestionType>
                </QuestionContainer>
            ))}
        </Container>
    );
};

export default Questions;