import * as Styled from './styled'
import { TouchableOpacityProps } from 'react-native';


interface PropsButton extends TouchableOpacityProps{
    variant?:  Styled.TVariantsButton;
    buttonText: string;
}

export default function Button({ buttonText, variant = 'sucess', ...touchableProps } : PropsButton) {
    return(
        <Styled.ButtonContainer
            variant={variant}
            {...touchableProps}
        >
            <Styled.ButtonText>
                { buttonText }
            </Styled.ButtonText>
        </Styled.ButtonContainer>
    )
}