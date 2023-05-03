import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const TitleInfo = styled.Text`
    ${({ theme }) => css({
        color: theme["gray-900"],
        fontSize: 26,
        fontWeight: "bold",
        fontFamily: 'Poppins_400Regular'
    })}
`

export const DescInfo = styled.Text`
    ${({ theme }) => css({
        color: theme["gray-600"],
        fontSize: 14,
        textAlign:"center",
        fontFamily: 'Poppins_400Regular'
    })}
`