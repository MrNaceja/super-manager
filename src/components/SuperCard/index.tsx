import { TouchableOpacityProps } from 'react-native'
import * as Styled from './styled'

interface PropsSuper extends TouchableOpacityProps{
    superName: string,
    totalProducts: number
}

export default function SuperCard({ superName, totalProducts, ...touchableProps } : PropsSuper) {
    return (
        <Styled.TouchableCard {...touchableProps} >
            <Styled.Icon />
            <Styled.SuperInfo>
                <Styled.SuperName>{superName}</Styled.SuperName>
                <Styled.SuperTotalProducts>
                {
                    totalProducts == 0
                    ? "Nenhum produto na lista de compras"
                    : totalProducts + " produto(s) na lista de compras"
                } 
                </Styled.SuperTotalProducts>
            </Styled.SuperInfo>
        </Styled.TouchableCard>
    )
}