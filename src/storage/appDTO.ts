export interface ISuperMarket {
    id: string,
    name: string,
    listProducts: IProduct[],
    sectors: TSector[]
}

export type TSector = 
'Padaria' |
'Açougue' |
'Hortifruti' |
'Laticínios' |
'Bebidas' |
'Mercearia' |
'Limpeza' |
'Higiene' |
'Petshop' |
'Produtos Naturais' |
'Congelados' |
'Cereais e Grãos' |
'Utensílios' |
'Floricultura' |
'Papelaria' |
'Acessórios' |
'Farmácia' |
'Automotivo';

export const SETORES : TSector[] = [
    'Padaria' ,
    'Açougue' ,
    'Hortifruti' ,
    'Laticínios' ,
    'Bebidas' ,
    'Mercearia' ,
    'Limpeza' ,
    'Higiene' ,
    'Petshop' ,
    'Produtos Naturais' ,
    'Congelados' ,
    'Cereais e Grãos' ,
    'Utensílios' ,
    'Floricultura' ,
    'Papelaria' ,
    'Acessórios' ,
    'Farmácia' ,
    'Automotivo'
]

export interface IProduct {
    id: string,
    name: string,
    sector: TSector
}

export enum storageTokens {
    SUPERS_MARKET = '@super-manager:SUPERS_MARKET'
}