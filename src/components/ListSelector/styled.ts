import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { css } from "styled-components/native";

interface PropsSelector {
    isSelected: boolean
}

export const Selector = styled(TouchableOpacity) <PropsSelector>`
    height: 50px;
    ${({ isSelected, theme }) => (
        css`
            background-color: ${ isSelected ? theme["gray-800"] : theme["gray-900"]};
            padding: 5px 20px;
            border-radius: 5px;
            align-items: center;
            justify-content: center;
        `
    )}
`

export const SelectorText = styled.Text<PropsSelector>`
    ${({ theme, isSelected }) => css`
        color: ${isSelected ? theme["gray-500"] : theme["gray-700"]};
        font-weight: ${isSelected ? 'bold' : 'normal'};
    `};
    font-size: 18px;
    font-family: 'Poppins_400Regular';
`