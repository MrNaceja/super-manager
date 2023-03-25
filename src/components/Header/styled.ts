import styled from "styled-components/native";
import {ShoppingCart, ArrowLeft} from 'phosphor-react-native'

export const Header = styled.View`
    width: 100%;
    height: 80px;
    align-items: center;
    padding: 30px 10px 0 10px;
    justify-content: center;
    flex-direction: row;
`

export const ButtonBack = styled.TouchableOpacity`
    flex: 1;
    height: 100%;
`
export const IconBack = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 32,
    color:theme["gray-100"]
}))``

export const Logo = styled(ShoppingCart).attrs(({ theme }) => ({
    size: 32,
    color: theme["gray-100"],
    weight: 'fill'
}))``
