import * as Styled from './styled'
import { TouchableOpacityProps } from 'react-native';

interface PropsListSelector extends TouchableOpacityProps{
    sector: string
    isSelected?: boolean
    totalProducts: number
}

export default function ListSector({ sector, isSelected = false, totalProducts, ...touchableProps } : PropsListSelector) {
    return (
        <Styled.Selector isSelected={isSelected} {...touchableProps}>
            <Styled.SelectorText isSelected={isSelected}>
                { sector }
            </Styled.SelectorText>
            <Styled.SelectorSectorTotalProducts total={totalProducts}/>
        </Styled.Selector>
    )
}