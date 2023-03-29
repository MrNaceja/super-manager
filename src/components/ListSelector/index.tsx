import * as Styled from './styled'
import { TouchableOpacityProps } from 'react-native';

interface PropsListSelector extends TouchableOpacityProps{
    listSelector: string;
    isSelected?: boolean
}

export default function ListSelector({ listSelector, isSelected = false, ...touchableProps } : PropsListSelector) {
    return (
        <Styled.SelectorContainer isSelected={isSelected} {...touchableProps}>
            <Styled.SelectorText isSelected={isSelected}>
                { listSelector }
            </Styled.SelectorText>
        </Styled.SelectorContainer>
    )
}