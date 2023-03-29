import { useState } from 'react'
import { FlatList } from 'react-native'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import InfoHighlight from '../../components/InfoHightlight'
import InputText from '../../components/InputText'
import ListSelector from '../../components/ListSelector'
import Product from '../../components/Product'
import * as Styled from './styled'

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

    return (
        <Styled.ListSuperContainer>
            <Header />
            <InfoHighlight 
                title='Lista de Compras'
                description='Adicione produtos e listas de compras'
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

        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flex:1, height: 38, gap:5}}
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

        <FlatList 
            data={listSupers.filter(list => list.selector == listSuperSelected)[0].products}
            keyExtractor={product => product.id.toString()}
            renderItem={({ item: product }) => <Product name={product.name} />}
        />

        </Styled.ListSuperContainer>
    )
}