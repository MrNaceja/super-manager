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
import { useRoute, RouteProp } from '@react-navigation/native';
import { TScreenListSuperProps } from '../../routes/app.routes'

interface Product {
    id: number;
    name: string
}

interface ModelListSuper {
    selector: string;
    products: Product[]
}

export default function ListSuper() {
    const [listSupers, setListSupers] = useState<ModelListSuper[]>([
        {
            selector: 'Frios',
            products: [{
                id: 1,
                name: 'Banana'
            },
            {
                id: 2,
                name: 'Banana'
            },
            {
                id: 9,
                name: 'Banana'
            },
            {
                id: 8,
                name: 'Banana'
            },
            {
                id: 10,
                name: 'Banana'
            },
            {
                id: 3,
                name: 'Banana'
            },
            {
                id: 5,
                name: 'Banana'
            },
            {
                id: 4,
                name: 'Banana'
            },
        ]
        },
        {
            selector: 'Bebidas',
            products: [{
                id: 1,
                name: 'Cerveja'
            }]
        }
    ])
    const [listSuperSelected, setListSuperSelected] = useState('Frios')

    const route = useRoute()
    const params = route.params as TScreenListSuperProps
    const superMarket = params.superMarket

    return (
        <Styled.ListSuperContainer>
            <Header />
            <InfoHighlight 
                title={superMarket}
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
                    data={listSupers}
                    keyExtractor={(listSuper) => listSuper.selector}
                    renderItem={({ item : listSuper }) => (
                        <ListSelector 
                            listSelector={listSuper.selector}
                            isSelected={listSuper.selector === listSuperSelected}
                            onPress={() => setListSuperSelected(listSuper.selector)}
                        />
                    )}
                />
            </Styled.ListSuperSelector>
            <FlatList 
                data={listSupers.filter(list => list.selector == listSuperSelected)[0].products}
                keyExtractor={product => product.id.toString()}
                renderItem={({ item: product }) => <Product name={product.name} />}
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