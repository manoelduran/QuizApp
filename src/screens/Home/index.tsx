import React from "react";
import { useSelector } from "react-redux";
import Questions from "../../components/Questions/Catalog";
import {
    Container,
    Text
} from './styles';

const Home: React.FC = () => {

    return (
        <Container>
            <Questions/>
        </Container>
    );
};

export default Home;
