export interface ISuperMarket {
    id: string,
    name: string
}

export type TSector = 'Açougue' | 'Padaria' | 'Enlatados' | 'Higiene e limpeza' | 'Cereais' | 'Frios e laticínios'

export interface IProduct {
    id: string,
    name: string,
    sector: TSector
}

export interface IListSuperMarket {
    superMarketId: string,
    listSuper: IProduct[]
}

export enum storageTokens {
    SUPERS_MARKET            = '@super-manager:SUPERS_MARKET',
    LIST_SUPER_SUPER_MARKET  = '@super-manager:LIST_SUPER'
}