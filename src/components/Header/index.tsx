import * as Styled from './styled'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import LogoSvg from '../../../assets/logo.svg'

interface PropsHeader {
    showButtonBack?: boolean
}

export default function Header({ showButtonBack = true } : PropsHeader) {

    const navigatorScreen = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    function onPressGoToBack() {
        navigatorScreen.popToTop()
    }

    return (
        <Styled.Header>
            {
                showButtonBack &&
                <Styled.ButtonBack onPress={onPressGoToBack}>
                    <Styled.IconBack />
                </Styled.ButtonBack>
            }
            <LogoSvg width={300} />
        </Styled.Header>
    )
}