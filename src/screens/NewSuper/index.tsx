import { useState } from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import InfoHighlight from '../../components/InfoHightlight'
import InputText from '../../components/InputText'
import * as Styled from './styled'
import { useNavigation} from '@react-navigation/native';

export default function NewSuper() {
    const [superMarket, setSuperMarket] = useState('')

    const navigatorScreen = useNavigation()

    function onPressGoToLists() {
        navigatorScreen.navigate("superList", { superMarket })
    }

    return (
        <Styled.NewSuperContainer>
            <Header showButtonBack />
            <InfoHighlight 
                title='Novo Supermercado' 
                description='Adicione um novo supermercado e gerencia suas listas de compras'
            />
            <InputText placeholder='seu supermercado favorito' onChangeText={setSuperMarket}/>
            <Button buttonText='Criar listas de compras' onPress={onPressGoToLists}/>
        </Styled.NewSuperContainer>
    )
}