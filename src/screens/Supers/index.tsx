import Header from "../../components/Header";
import InfoHighlight from "../../components/InfoHightlight";
import SuperCard from "../../components/SuperCard";
import * as Styled from "./styled";

export default function Supers() {
    return (
        <Styled.SupersContainer>
            <Header showButtonBack = {false} />
            <InfoHighlight 
                title='Supermercados'
                description="Adicione Supermercados para gerenciar as listas de compras"
            />
            {/* <SuperCard /> */}
        </Styled.SupersContainer>
    )
}