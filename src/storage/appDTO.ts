export interface ISuperMarket {
    id: string,
    name: string,
    listProducts: IProduct[]
}

export type TSector = 'Açougue' | 'Padaria' | 'Enlatados' | 'Higiene e limpeza' | 'Cereais' | 'Frios e laticínios'

export interface IProduct {
    id: string,
    name: string,
    sector: TSector
}

export enum storageTokens {
    SUPERS_MARKET = '@super-manager:SUPERS_MARKET'
}