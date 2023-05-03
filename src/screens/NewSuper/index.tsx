import { useState } from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import InfoHighlight from '../../components/InfoHightlight'
import InputText from '../../components/InputText'
import * as Styled from './styled'
import { useNavigation} from '@react-navigation/native';
import create from '../../storage/superMarket/create'
import { ISuperMarket, SETORES, TSector } from '../../storage/appDTO';
import { AppRoutes } from '../../routes/routes'
import { Alert } from 'react-native'

export default function NewSuper() {
    const [superMarket, setSuperMarket] = useState('')
    const [sectorsSelected, setSectorsSelected] = useState<TSector[]>([])
    const navigatorScreen = useNavigation()

    async function onPressCreateSuper() {
        if (superMarket.trim().length == 0) {
            return Alert.alert('Novo Supermercado', 'Informe um nome de supermercado para adiciona-lo')
        }
        if (sectorsSelected.length == 0) {
            return Alert.alert('Novo Supermercado', 'Selecione um ou mais setores para a lista de compras')
        }
        try {
            const superMarketId = superMarket + "@id:" + Math.random();
            const newSuperMarket : ISuperMarket = {id: superMarketId, name: superMarket, listProducts: [], sectors: sectorsSelected}
            await create(newSuperMarket)
            navigatorScreen.navigate(AppRoutes.SUPER_LIST, {superMarketId: newSuperMarket.id})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Styled.NewSuperContainer>
            <Header showButtonBack />
            <InfoHighlight 
                title='Novo Supermercado' 
                description='Adicione um novo supermercado e começe a adicionar produtos à lista de compras'
            />
            <InputText placeholder='seu supermercado favorito' onChangeText={setSuperMarket}/>
            <Styled.SelectSectorList 
                 items={SETORES.map((sector) => {
                    return {sector}
                 })}
                 uniqueKey="sector"
                 onSelectedItemsChange={(selectedSectors : TSector[]) => setSectorsSelected(selectedSectors)}
                 selectedItems={sectorsSelected}
                 displayKey="sector"
            />
            <Button buttonText='Criar lista de compras' onPress={onPressCreateSuper} />
        </Styled.NewSuperContainer>
    )
}