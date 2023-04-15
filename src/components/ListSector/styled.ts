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

interface PropsTotalProducts {
    total: number
}

export const SelectorSectorTotalProducts = styled.View.attrs<PropsTotalProducts>(props => ({
    children: React.createElement(Text, {children: props.total, style: {color: props.theme["green-500"]}})
} as ViewProps))<PropsTotalProducts>`
    background: ${props => props.theme["green-700"]}80;
    border-radius: 20px;
    width:20px;
    height: 20px;
    align-items:center;
    justify-content: center;
`