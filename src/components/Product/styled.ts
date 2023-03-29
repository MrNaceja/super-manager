import { IconProps, ShoppingBag } from "phosphor-react-native"
import styled from "styled-components/native"

export const ProductContainer = styled.View`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    border-bottom-color: ${props => props.theme["gray-800"]};
    border-bottom-width: 2px;
    padding:10px;
`

export const ProductName = styled.Text`
    flex: 1;
    color: ${props => props.theme["gray-500"]};
    font-size: 18px;
    font-family: 'Poppins_400Regular';
`

export const ProductIcon = styled(ShoppingBag).attrs(props => <IconProps>({
    color: props.theme["gray-600"],
    size: 20
}))`

`