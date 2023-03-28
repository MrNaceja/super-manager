import { useState } from "react";
import { FlatList } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InfoHighlight from "../../components/InfoHightlight";
import ListEmpty from "../../components/ListEmpty";
import SuperCard from "../../components/SuperCard";
import * as Styled from "./styled";

export default function Supers() {
    // const [supers, setSupers] = useState<string[]>([])
    const [supers, setSupers] = useState<string[]>(['Atacado Albino', 'teste'])

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
            />
        </Styled.SupersContainer>
    )
}