export interface ISuperMarket {
    id: string,
    name: string,
    listProducts: IProduct[]
}

export type TSector = 'Açougue' | 'Padaria' | 'Enlatados' | 'Higiene e Limpeza' | 'Cereais' | 'Frios e Laticínios' | 'Frutas e Verduras'

export interface IProduct {
    id: string,
    name: string,
    sector: TSector
}

export enum storageTokens {
    SUPERS_MARKET = '@super-manager:SUPERS_MARKET'
}