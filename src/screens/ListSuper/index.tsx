import { useState } from 'react'
import { FlatList } from 'react-native'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import InfoHighlight from '../../components/InfoHightlight'
import InputText from '../../components/InputText'
import ListEmpty from '../../components/ListEmpty'
import ListSelector from '../../components/ListSelector'
import Product from '../../components/Product'
import * as Styled from './styled'
import Button from '../../components/Button'
import { useRoute } from '@react-navigation/native';
import { TScreenListSuperProps } from '../../routes/app.routes'
import ListSuperDTO, { TListSelector } from '../../storage/listSuper/listSuperDTO'

export default function ListSuper() {
    const [listSuper, setListSuper] = useState<ListSuperDTO[]>([])
    const [listSelectorActive, setListSelectorActive] = useState<TListSelector>("Frios")
    const route = useRoute()
    const params = route.params as TScreenListSuperProps
    const superMarket = params.superMarket

    const listSuperSelected = listSuper.filter(list => list.listSelector == listSelectorActive)

    return (
        <Styled.ListSuperContainer>
            <Header />
            <InfoHighlight 
                title={superMarket.name}
                description='Adicione produtos nas listas de compras'
            />
            <Styled.FormProduct>
                <InputText 
                    placeholder='nome de um produto'
                />
                <IconButton 
                    icon="add"
                    variant="sucess"
                />
            </Styled.FormProduct>

            <Styled.ListSuperSelector>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{columnGap:5}}
                    data={listSuper}
                    keyExtractor={(listSuper) => listSuper.listSelector}
                    renderItem={({ item : listSuper }) => (
                        <ListSelector 
                            listSelector={listSuper.listSelector}
                            isSelected={listSuper.listSelector === listSelectorActive}
                            onPress={() => setListSelectorActive(listSuper.listSelector)}
                        />
                    )}
                />
            </Styled.ListSuperSelector>

            <FlatList 
                data={listSuperSelected}
                keyExtractor={(listSuper, index) => listSuper.products[index].id}
                renderItem={({ item: listSuper, index }) => <Product name={listSuper.products[index].name} />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <ListEmpty messageEmpty="Não há produtos listados" />}
            />

            <Button 
                buttonText="Deletar Supermercado"
                variant="error"
            />
        </Styled.ListSuperContainer>
    )
}