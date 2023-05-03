import styled from "styled-components/native";
import {ArrowLeft} from 'phosphor-react-native'
import { SafeAreaView } from "react-native-safe-area-context";

export const Header = styled(SafeAreaView)`
    height: 80px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const ButtonBack = styled.TouchableOpacity`
    flex: 1;
`
export const IconBack = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 32,
    color:theme["gray-800"]
}))``

