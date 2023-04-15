import { useCallback, useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InfoHighlight from "../../components/InfoHightlight";
import ListEmpty from "../../components/ListEmpty";
import SuperCard from "../../components/SuperCard";
import * as Styled from "./styled";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import read from "../../storage/superMarket/read";
import { ISuperMarket } from "../../storage/appDTO";
import { AppRoutes } from "../../routes/routes";

export default function Supers() {
    const [supers, setSupers] = useState<ISuperMarket[]>([])

    const navigatorScreen = useNavigation()

    function onPressNavigateToCreateNewSuper() {
        navigatorScreen.navigate(AppRoutes.NEW_SUPER)
    }

    async function loadSupers() {
        try {
            const supersStoraged = await read()
            setSupers(supersStoraged)
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(
        useCallback(() => { loadSupers() }, [])
    )

    function onPressOpenListSuperMarket(superMarket : ISuperMarket) {
        navigatorScreen.navigate(AppRoutes.SUPER_LIST, {superMarket})
    }

    return (
        <Styled.SupersContainer>
            <Header showButtonBack = {false} />
            <InfoHighlight 
                title='Supermercados'
                description="Gerencie listas de seus supermercados favoritos"
            />
            <Styled.SuperList
                data={supers}
                keyExtractor={(superMarket, id) => superMarket.id}
                renderItem={({ item : superMarket }) => (
                    <SuperCard 
                    onPress={() => onPressOpenListSuperMarket(superMarket)}
                        superName={superMarket.name}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty 
                        messageEmpty="Você ainda não adicionou nenhum supermercado"
                    />
                )}
            />

            <Button 
                buttonText="Novo Supermercado"
                onPress={onPressNavigateToCreateNewSuper}
            />
        </Styled.SupersContainer>
    )
}