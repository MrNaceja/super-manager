import Button from '../../components/Button'
import Header from '../../components/Header'
import InfoHighlight from '../../components/InfoHightlight'
import InputText from '../../components/InputText'
import * as Styled from './styled'

export default function NewSuper() {
    return (
        <Styled.NewSuperContainer>
            <Header showButtonBack />
            <InfoHighlight 
                title='Novo Supermercado' 
                description='Adicione um novo supermercado e gerencia suas listas de compras'
            />
            <InputText placeholder='seu supermercado favorito'/>
            <Button buttonText='Criar listas de compras' />
        </Styled.NewSuperContainer>
    )
}