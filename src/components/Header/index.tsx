import * as Styled from './styled'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
            <Styled.Logo />
        </Styled.Header>
    )
}