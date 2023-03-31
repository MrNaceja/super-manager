import { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InfoHighlight from "../../components/InfoHightlight";
import ListEmpty from "../../components/ListEmpty";
import SuperCard from "../../components/SuperCard";
import * as Styled from "./styled";
import { useNavigation } from "@react-navigation/native";

export default function Supers() {
    const [supers, setSupers] = useState<string[]>(['Atacado Albino', 'teste'])

    const navigatorScreen = useNavigation()

    function onPressNavigateToCreateNewSuper() {
        navigatorScreen.navigate("newSuper")
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
                keyExtractor={(superItem, id) => id.toString()}
                renderItem={({ item : superItem }) => (
                    <SuperCard 
                        superName={superItem}
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