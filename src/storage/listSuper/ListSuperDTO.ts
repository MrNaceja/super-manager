import SuperMarketDTO from "../superMarket/SuperMarketDTO";

export type TListSelector = 'Frios' | 'Bebidas'

interface IProduto {
    id: string;
    name: string
}

export default interface ListSuperDTO {
    superMarketID: string
    listSelector: TListSelector;
    products: IProduto[]
}