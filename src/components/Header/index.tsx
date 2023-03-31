import * as Styled from './styled'
import { useNavigation } from '@react-navigation/native';

interface PropsHeader {
    showButtonBack?: boolean
}

export default function Header({ showButtonBack = true } : PropsHeader) {

    const navigatorScreen = useNavigation()

    function onPressGoToBack() {
        navigatorScreen.goBack()
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