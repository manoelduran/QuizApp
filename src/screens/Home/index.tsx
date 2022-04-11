import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import QuestionCard from "../../components/QuestionCard";
import * as api from '../../services/api';
import {
    Container,
    Text
} from './styles';

const Home: React.FC = () => {
    const [questions, setQuestions] = useState<IQuestionItem[]>([]);
    const handleQuestion = (item: IQuestionItem) => {

    };
    const handleQuestions = () => {
        api.getQuestions()
            .then(response => {
                console.log(response);
                setQuestions(response);
            })
            .catch(() => {
                Alert.alert("Error", "Erro ao tentar buscar questões")
            })
    }
    useEffect(() => {
        handleQuestions();
    }, []);
    return (
        <Container>
            <FlatList
                data={questions}
                keyExtractor={item => item.question}
                renderItem={({ item, index }) => (
                    <QuestionCard
                        index={index}
                        data={item}
                        onPress={() => handleQuestion(item)}
                    />
                )}
            />
        </Container>
    );
};

export default Home;
