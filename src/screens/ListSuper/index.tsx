import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import InfoHighlight from '../../components/InfoHightlight'
import InputText from '../../components/InputText'
import ListEmpty from '../../components/ListEmpty'
import Product from '../../components/Product'
import * as Styled from './styled'
import Button from '../../components/Button'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { IProduct, ISuperMarket, TSector, SETORES } from '../../storage/appDTO';
import { PropsScreenSuperList } from '../../@types/navigation'
import read from '../../storage/superMarket/read'
import Loading from '../../components/Loading'
import updateListProducts from '../../storage/superMarket/updateListProducts'
import ListSector from '../../components/ListSector';
import remove from '../../storage/superMarket/remove';
import { AppRoutes } from '../../routes/routes';

export default function ListSuper() {
    const { params }                                            = useRoute()
    const [inputProduct, setInputProduct]                       = useState('')
    const [superMarket, setSuperMarket]                         = useState<ISuperMarket>({} as ISuperMarket)
    const [superMarketListProducts, setSuperMarketListProducts] = useState<IProduct[]>([])
    const [superMarketSectors, setSuperMarketSectors]           = useState<TSector[]>([])
    const [sectorListActive, setSectorListActive]               = useState<TSector>(superMarketSectors[0])
    const [superMarketListLoaded, setSuperMarketListLoaded]     = useState(false)
    const {superMarketId}                                       = params as PropsScreenSuperList

    const productsListBySector = superMarketListProducts.filter(product => product.sector == sectorListActive)
    const addingProduct = inputProduct.length > 0

    const navigationScreen = useNavigation()

    async function onPressAddProduct() {
        if (inputProduct.trim().length == 0) {
            return Alert.alert('Adicionar Produto', 'Informe o nome de um produto para adicionar')
        }
        const newProduct : IProduct = {
            id: `${superMarket.id}_${sectorListActive}_${productsListBySector.length++}`,
            name: inputProduct.trim(),
            sector: sectorListActive
        }
        setInputProduct('')
        await updateListProducts(superMarketId, [...superMarketListProducts, newProduct])
        setSuperMarketListProducts(productsState => [...productsState, newProduct])
    }

    function onPressDeleteSuperMarket() {
        Alert.alert('Remover Supermercado', `Tem certeza que deseja remover o supermercado (${superMarket.name})`, [
            {
                text:'Sim',
                onPress: async () => {
                    await remove(superMarketId)
                    Alert.alert('Remover Supermercado', 'Supermercado foi removido')
                    navigationScreen.navigate(AppRoutes.HOME)
                }
            },
            {
                text:'Não'
            }
        ])
    }

    function handleRemoveProduct(productId : string) {
        Alert.alert('Remover Produto', 'Tem certeza que deseja remover este produto da sua lista?', [
            {
                text: 'Sim',
                onPress: async () => {
                    await updateListProducts(superMarketId, [...superMarketListProducts.filter(product => product.id !== productId)])
                    setSuperMarketListProducts(productsState => [...productsState.filter(product => product.id !== productId)])
                }
            },
            {
                text: 'Não',
            }
        ])
    }

    async function loadSuperMarketList() {
        try {
            setSuperMarketListLoaded(false)
            const superMarket = await read<ISuperMarket>(superMarketId)
            setSuperMarket(superMarket)
            setSuperMarketSectors(superMarket.sectors)
            setSuperMarketListProducts(superMarket.listProducts)
            setSectorListActive(superMarket.sectors[0])
            setSuperMarketListLoaded(true)
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(
        useCallback(() => { loadSuperMarketList() }, [])
    )

    return (
        <Styled.ListSuperContainer>
            <Header />
            { !superMarketListLoaded ? <Loading /> : 
            <>
                <InfoHighlight 
                    title={superMarket.name}
                    description='Adicione produtos na lista de compras'
                />
                <Styled.FormProduct>
                    <InputText 
                        placeholder='nome de um produto'
                        onChangeText={setInputProduct}
                        value={inputProduct}
                        onSubmitEditing={onPressAddProduct}
                        blurOnSubmit
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
                        data={superMarketSectors}
                        keyExtractor={(sector) => sector}
                        renderItem={({ item : sector }) => (
                            <ListSector 
                                sector={sector}
                                isSelected={sector === sectorListActive}
                                onPress={() => setSectorListActive(sector)}
                                totalProducts={superMarketListProducts.filter(product => product.sector == sector).length}
                            />
                        )}
                    />
                </Styled.ListSuperSelector>

                <FlatList 
                    contentContainerStyle={{flex:1}}
                    data={productsListBySector}
                    keyExtractor={product => product.id}
                    renderItem={({ item: product}) => <Product name={product.name} onRemove={() => handleRemoveProduct(product.id)}/>}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => <ListEmpty messageEmpty="Não há produtos listados" />}
                />

                <Button 
                    buttonText="Deletar Supermercado"
                    variant="error"
                    onPress={onPressDeleteSuperMarket}
                />
            </>}
        </Styled.ListSuperContainer>
    )
}