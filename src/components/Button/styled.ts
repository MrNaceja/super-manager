import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type TVariantsButton = 'sucess' | 'error';

interface PropsButtonContainer {
    variant: TVariantsButton
}

export const ButtonContainer = styled(TouchableOpacity)<PropsButtonContainer>`
    height: 56px;
    border-radius: 5px;
    padding:5px;
    background-color: ${({ theme, variant }) => (
        variant === 'error' ? theme["red-500"] : theme["green-500"]
    )};
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.Text`
    color: ${props => props.theme["gray-100"]};
    font-size: 18px;
    font-weight: bold;
    font-family: 'Poppins_400Regular';
    text-transform: uppercase;
`