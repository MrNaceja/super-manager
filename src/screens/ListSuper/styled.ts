import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ListSuperContainer = styled(SafeAreaView)`
    flex: 1;
    background: ${props => props.theme["gray-200"]};
    padding: 0 15px 15px;
    gap: 10px;
`

export const FormProduct = styled.View`
    width: 100%;
    background: ${props => props.theme["gray-200"]};
    flex-direction: row;
    border-radius: 5px;
`

export const ListSuperSelector = styled.View``