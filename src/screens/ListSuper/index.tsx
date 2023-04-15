import { useCallback, useState, useEffect } from 'react';
import { Alert, FlatList } from 'react-native'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import InfoHighlight from '../../components/InfoHightlight'
import InputText from '../../components/InputText'
import ListEmpty from '../../components/ListEmpty'
import ListSelector from '../../components/ListSelector'
import Product from '../../components/Product'
import * as Styled from './styled'
import Button from '../../components/Button'
import { useFocusEffect, useRoute } from '@react-navigation/native';
import nextId from "react-id-generator";
import { IProduct, ISuperMarket, TSector } from '../../storage/appDTO';
import { PropsScreenSuperList } from '../../@types/navigation'
import read from '../../storage/superMarket/read'
import Loading from '../../components/Loading'
import updateListProducts from '../../storage/superMarket/updateListProducts'

export default function ListSuper() {
    const { params }                                            = useRoute()
    const [inputProduct, setInputProduct]                       = useState('')
    const [sectorListActive, setSectorListActive]               = useState<TSector>("Açougue")
    const [superMarket, setSuperMarket]                         = useState<ISuperMarket>({} as ISuperMarket)
    const [superMarketListProducts, setSuperMarketListProducts] = useState<IProduct[]>([])
    const [superMarketListLoaded, setSuperMarketListLoaded]     = useState(false)
    const sectorsList : TSector[]                               = ['Açougue', 'Padaria', 'Enlatados', 'Higiene e limpeza', 'Cereais', 'Frios e laticínios']
    const {superMarketId}                                       = params as PropsScreenSuperList

    const productsListBySector = superMarketListProducts.filter(product => product.sector == sectorListActive)
    const addingProduct = inputProduct.length > 0

    async function onPressAddProduct() {
        if (inputProduct.trim().length == 0) {
            return Alert.alert('Adicionar Produto', 'Informe o nome de um produto para adicionar')
        }
        const newProduct : IProduct = {
            id: nextId(),
            name: inputProduct.trim(),
            sector: sectorListActive
        }
        setInputProduct('')
        await updateListProducts(superMarketId, newProduct)
        setSuperMarketListProducts(productsState => [...productsState, newProduct])
    }

    async function loadSuperMarketList() {
        try {
            const superMarket = await read<ISuperMarket>(superMarketId)
            setSuperMarket(superState => superMarket)
            setSuperMarketListProducts(listsProductsState => superMarket.listProducts)
            setSuperMarketListLoaded(loadState => true)
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(
        useCallback(() => { loadSuperMarketList() }, [])
    )

    return !superMarketListLoaded ? <Loading /> : (
        <Styled.ListSuperContainer>
            <Header />
            <InfoHighlight 
                title={superMarket.name}
                description='Adicione produtos nas listas de compras'
            />
            <Styled.FormProduct>
                <InputText 
                    placeholder='nome de um produto'
                    onChangeText={setInputProduct}
                    value={inputProduct}
                />
                <IconButton 
                    icon="add"
                    variant="sucess"
                    onPress={onPressAddProduct}
                    disabled={!addingProduct}
                />
            </Styled.FormProduct>

            <Styled.ListSuperSelector>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{columnGap:5}}
                    data={sectorsList}
                    keyExtractor={(sector) => sector}
                    renderItem={({ item : sector }) => (
                        <ListSelector 
                            listSelector={sector}
                            isSelected={sector === sectorListActive}
                            onPress={() => setSectorListActive(sector)}
                        />
                    )}
                />
            </Styled.ListSuperSelector>

            <FlatList 
                data={productsListBySector}
                keyExtractor={product => product.id}
                renderItem={({ item: product}) => <Product name={product.name} />}
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