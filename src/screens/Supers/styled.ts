
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const SupersContainer = styled(SafeAreaView)`
    flex: 1;
    background: ${props => props.theme["gray-200"]};
    gap: 30px;
    padding: 15px 15px 15px;
`

export const SuperList = (styled(FlatList).attrs(props => ({
    contentContainerStyle: {
        gap: 10,
    }
}))`` as unknown) as typeof FlatList;