import { TouchableOpacityProps } from 'react-native'
import * as Styled from './styled'

interface PropsSuper extends TouchableOpacityProps{
    superName: string
}

export default function SuperCard({ superName, ...touchableProps } : PropsSuper) {
    return (
        <Styled.TouchableCard {...touchableProps} >
            <Styled.Icon />
            <Styled.SuperName>{superName}</Styled.SuperName>
        </Styled.TouchableCard>
    )
}