import { SmileySad } from "phosphor-react-native";
import styled from "styled-components/native";

export const EmptyContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
export const EmptyMessage = styled.Text`
    color: ${props => props.theme["gray-600"]};
    font-size: 14px;
    font-family: 'Poppins_400Regular';
`

export const EmptyIcon = styled(SmileySad).attrs(({ theme }) => ({
    size: 28,
    color:theme["gray-600"]
}))``