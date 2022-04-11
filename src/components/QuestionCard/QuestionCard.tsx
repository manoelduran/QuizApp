import React, { useEffect, useState } from "react";
import { Text, TouchableOpacityProps } from "react-native";
import {
    Container,
    Title,
    QuestionsContainer,
    QuestionContainer,
    QuestionName,
    QuestionCategory,
    QuestionType,
    Answer,
} from './styles';

interface CharacterCardProps extends TouchableOpacityProps {
    index: number;
};

const QuestionCard: React.FC = ({ index, ...rest }: CharacterCardProps) => {

    return (
        <Container>
        </Container>
    );
};

export default QuestionCard;