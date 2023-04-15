import { useState } from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import InfoHighlight from '../../components/InfoHightlight'
import InputText from '../../components/InputText'
import * as Styled from './styled'
import { useNavigation} from '@react-navigation/native';
import create from '../../storage/superMarket/create'
import nextId from "react-id-generator";
import { ISuperMarket } from '../../storage/appDTO'
import { AppRoutes } from '../../routes/routes'

export default function NewSuper() {
    const [superMarket, setSuperMarket] = useState('')

    const navigatorScreen = useNavigation()

    async function onPressCreateSuper() {
        try {
            const newSuperMarket : ISuperMarket = {id: nextId(), name: superMarket}
            await create(newSuperMarket)
            navigatorScreen.navigate(AppRoutes.SUPER_LIST, {superMarket: newSuperMarket})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Styled.NewSuperContainer>
            <Header showButtonBack />
            <InfoHighlight 
                title='Novo Supermercado' 
                description='Adicione um novo supermercado e gerencia suas listas de compras'
            />
            <InputText placeholder='seu supermercado favorito' onChangeText={setSuperMarket}/>
            <Button buttonText='Criar listas de compras' onPress={onPressCreateSuper}/>
        </Styled.NewSuperContainer>
    )
}