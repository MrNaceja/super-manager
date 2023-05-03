
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const SupersContainer = styled.View`
    flex: 1;
    background: ${props => props.theme["gray-200"]};
    gap: 30px;
    padding: 15px 15px 15px;
`

export const SuperList = (styled(FlatList).attrs(props => ({
    contentContainerStyle: {
        gap: 10,
        flex: 1,
    }
}))`` as unknown) as typeof FlatList;