import styled, { css } from "styled-components/native";

interface ContainerProps {
    index: number;
};

export const Container = styled.View`
flex: 1;
align-items:center ;
justify-content:center ;
`;
export const Title = styled.Text``;

export const QuestionsContainer = styled.View``;

export const QuestionContainer = styled.TouchableOpacity.attrs<ContainerProps>(() => ({
    activeOpacity: 0.8,
})) <ContainerProps>`
width: 100%;
padding: 24px;
${({ theme, index }) => css`
border-bottom-width: ${index % 1 > 0 ? 0 : 1}px;
border-bottom-color: ${theme.COLORS.SHAPE};
`}
`;

export const QuestionName = styled.Text`
font-size: 15px;
${({ theme }) => css`
font-family: ${theme.FONTS.TITLE};
color: ${theme.COLORS.SECONDARY_900};
`}
`;

export const QuestionCategory = styled.Text`
font-size: 11px;
margin-top: 11px;
${({ theme }) => css`
font-family: ${theme.FONTS.TEXT};
color: ${theme.COLORS.SECONDARY_400};
`}
`;

export const Answer = styled.Text`
font-size: 15px;
${({ theme }) => css`
font-family: ${theme.FONTS.TITLE};
color: ${theme.COLORS.SECONDARY_900};
`}
`;

export const QuestionType = styled.Text`
font-size: 11px;
margin-top: 11px;
${({ theme }) => css`
font-family: ${theme.FONTS.TEXT};
color: ${theme.COLORS.SECONDARY_400};
`}
`;