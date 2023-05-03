import styled from "styled-components/native";
import { TouchableOpacity, Text } from 'react-native';
import { css } from "styled-components/native";
import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";
import React from "react";

interface PropsSelector {
    isSelected: boolean
}

export const Selector = styled(TouchableOpacity) <PropsSelector>`
    height: 50px;
    flex-direction: row;
    gap: 5px;
    ${({ isSelected, theme }) => (
        css`
            border-bottom-width: 2px;
            border-bottom-color: ${ isSelected ? theme["green-500"] : theme["gray-200"]};
            padding: 5px 20px;
            align-items: center;
            justify-content: center;
        `
    )}
`

export const SelectorText = styled.Text<PropsSelector>`
    ${({ theme, isSelected }) => css`
        color: ${isSelected ? theme["green-500"] : theme["gray-500"]};
        font-weight: ${isSelected ? 'bold' : 'normal'};
    `};
    font-size: 18px;
    font-family: 'Poppins_400Regular';
`

interface PropsTotalProducts extends PropsSelector{
    total: number
}

export const SelectorSectorTotalProducts = styled.View.attrs<PropsTotalProducts>(props => ({
    children: React.createElement(Text, {children: props.total, style: {color: props.theme["gray-200"],  fontWeight: "bold"}})
} as ViewProps))<PropsTotalProducts>`
    background: ${props => props.isSelected ? props.theme["green-500"] : props.theme["gray-400"]};
    border-radius: 20px;
    width:20px;
    height: 20px;
    align-items:center;
    justify-content: center;
`