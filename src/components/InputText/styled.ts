import { TextInput, TextInputProps } from "react-native";
import styled from "styled-components/native";

export const InputContainer = styled(TextInput).attrs(props => <TextInputProps>({ 
    placeholderTextColor: props.theme["gray-600"]
}))`
    background: ${props => props.theme["gray-800"]};
    font-size: 16px;
    color: ${props => props.theme["gray-500"]};
    font-family: 'Poppins_400Regular';
    flex:1;
    min-height: 56px;
    padding: 10px;
    max-height:56px;
    border-radius: 5px;
`