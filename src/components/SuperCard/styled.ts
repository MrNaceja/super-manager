import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ShoppingCart } from 'phosphor-react-native'

export const SuperName = styled.Text`
    color: ${props => props.theme["gray-400"]};
    font-size: 28px;
    font-family: 'Poppins_400Regular';
`

export const Icon = styled(ShoppingCart).attrs(props => ({
    size: 28,
    color: props.theme["green-500"],
    weight: 'fill'
}))``

export const TouchableCard = styled(TouchableOpacity)`
    background: ${props => props.theme["gray-800"]};
    height: 100px;
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    gap: 15px
`