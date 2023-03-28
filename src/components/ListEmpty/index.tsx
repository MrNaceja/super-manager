import { SmileySad } from 'phosphor-react-native'
import * as Styled from './styled'

interface PropsListEmpty {
    messageEmpty: string
}

export default function ListEmpty({ messageEmpty } : PropsListEmpty) {
    return (
        <Styled.EmptyContainer>
            <Styled.EmptyMessage>{ messageEmpty }</Styled.EmptyMessage>
            <Styled.EmptyIcon />
        </Styled.EmptyContainer>
    )
}