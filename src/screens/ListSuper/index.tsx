import { useState } from 'react'
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
import { useRoute } from '@react-navigation/native';
import nextId from "react-id-generator";
import { IProduct, TSector } from '../../storage/appDTO'
import { PropsScreenSuperList } from '../../@types/navigation'

export default function ListSuper() {
    const [inputProduct, setInputProduct]         = useState('')
    const [productsList, setProductsList]         = useState<IProduct[]>([])
    const [sectorListActive, setSectorListActive] = useState<TSector>("Açougue")

    const sectorsList : TSector[] = ['Açougue', 'Padaria', 'Enlatados', 'Higiene e limpeza', 'Cereais', 'Frios e laticínios']

    const productsListBySector = productsList.filter(product => product.sector == sectorListActive)
   
    const { params } = useRoute()
    const {superMarket} = params as PropsScreenSuperList


    function onPressAddProduct() {
        if (inputProduct.trim().length == 0) {
            return Alert.alert('Adicionar Produto', 'Informe o nome de um produto para adicionar')
        }
        const newProduct : IProduct = {
            id: nextId(),
            name: inputProduct.trim(),
            sector: sectorListActive
        }
        setProductsList(lasts => [...lasts, newProduct])
    }

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
                    onChangeText={setInputProduct}
                />
                <IconButton 
                    icon="add"
                    variant="sucess"
                    onPress={onPressAddProduct}
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