import * as Styled from './styled'
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface PropsIconButton extends TouchableOpacityProps{
    variant?: Styled.TVariantsIcon;
    icon: keyof typeof MaterialIcons.glyphMap
}

export default function IconButton({ variant = 'light', icon, ...touchableProps } : PropsIconButton) {
    return (
        <Styled.ButtonContainer { ...touchableProps }>
            <Styled.Icon 
                name={ icon }
                variant={ variant }
            />
        </Styled.ButtonContainer>
    )
}