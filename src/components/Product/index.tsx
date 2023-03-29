import IconButton from '../IconButton'
import * as Styled from './styled'

interface PropsProduct {
    name: string
}

export default function Product({ name } : PropsProduct) {
    return (
        <Styled.ProductContainer>
            <Styled.ProductIcon />
            <Styled.ProductName>{ name }</Styled.ProductName>
            <IconButton icon='close' variant='error'/>
        </Styled.ProductContainer>
    )
}