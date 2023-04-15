import IconButton from '../IconButton'
import * as Styled from './styled'

interface PropsProduct {
    name: string,
    onRemove: () => void
}

export default function Product({ name, onRemove } : PropsProduct) {
    return (
        <Styled.ProductContainer>
            <Styled.ProductIcon />
            <Styled.ProductName>{ name }</Styled.ProductName>
            <IconButton icon='close' variant='error' onPress={onRemove}/>
        </Styled.ProductContainer>
    )
}