import { useCallback, useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InfoHighlight from "../../components/InfoHightlight";
import ListEmpty from "../../components/ListEmpty";
import SuperCard from "../../components/SuperCard";
import * as Styled from "./styled";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import read from "../../storage/superMarket/read";
import { ISuperMarket } from '../../storage/appDTO';
import { AppRoutes } from "../../routes/routes";
import Loading from "../../components/Loading";

export default function Supers() {
    const [supers, setSupers] = useState<ISuperMarket[]>([])
    const [supersLoaded, setSupersLoaded] = useState(false)
    const navigatorScreen = useNavigation()

    function onPressNavigateToCreateNewSuper() {
        navigatorScreen.navigate(AppRoutes.NEW_SUPER)
    }

    async function loadSupers() {
        try {
            setSupersLoaded(false)
            const supersStoraged = await read<ISuperMarket[]>()
            setSupers(supersStoraged)
            setSupersLoaded(true)
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(
        useCallback(() => { loadSupers() }, [])
    )

    function onPressOpenListSuperMarket(superMarket : ISuperMarket) {
        navigatorScreen.navigate(AppRoutes.SUPER_LIST, {superMarketId: superMarket.id})
    }

    return (
        <Styled.SupersContainer>
            <Header showButtonBack = {false} />
            <InfoHighlight 
                title='Supermercados'
                description="Gerencie listas de compras de seus supermercados favoritos"
            />
            {!supersLoaded ? <Loading /> :
                <Styled.SuperList
                    showsVerticalScrollIndicator={false}
                    data={supers}
                    keyExtractor={(superMarket, id) => superMarket.id}
                    renderItem={({ item : superMarket }) => (
                        <SuperCard 
                        onPress={() => onPressOpenListSuperMarket(superMarket)}
                            superName={superMarket.name}
                            totalProducts={superMarket.listProducts.length}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <ListEmpty 
                            messageEmpty="Você ainda não adicionou nenhum supermercado"
                        />
                    )}
                />
            }
            <Button 
                buttonText="Novo Supermercado"
                onPress={onPressNavigateToCreateNewSuper}
            />
        </Styled.SupersContainer>
    )
}