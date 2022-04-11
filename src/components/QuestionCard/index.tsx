import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
    QuestionContainer,
    QuestionName,
    QuestionCategory,
    QuestionType,
    Answer,
} from './styles';

interface QuestionCardProps extends TouchableOpacityProps {
    index: number;
    data: IQuestionItem;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ index, data, ...rest }) => {

    return (
        <QuestionContainer index={index} {...rest}>
            <QuestionName>{data.question}</QuestionName>
            <QuestionCategory>{data.category}</QuestionCategory>
            <QuestionType>{data.type}</QuestionType>
        </QuestionContainer>
    );
};

export default QuestionCard;