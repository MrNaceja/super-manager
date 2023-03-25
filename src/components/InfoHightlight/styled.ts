import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const TitleInfo = styled.Text`
    ${({ theme }) => css({
        color: theme["gray-100"],
        fontSize: 26,
        fontWeight: "bold"
    })}
`

export const DescInfo = styled.Text`
    ${({ theme }) => css({
        color: theme["gray-500"],
        fontSize: 14
    })}
`