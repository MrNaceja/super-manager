import styled from "styled-components/native";

export const ListSuperContainer = styled.View`
    flex: 1;
    background: ${props => props.theme["gray-900"]};
    gap: 30px;
    padding: 20px;
`

export const FormProduct = styled.View`
    width: 100%;
    background: ${props => props.theme["gray-800"]};
    flex-direction: row;
    border-radius: 5px;
`