import AsyncStorage from "@react-native-async-storage/async-storage";
import { IProduct, ISuperMarket, storageTokens } from "../appDTO";
import read from "./read";

export default async function updateListProducts(superMarketUpdateId : string, newProduct : IProduct) {
    try {
        const supers = await read<ISuperMarket[]>()
        const superToUpdate = supers.filter(superMarket => superMarket.id == superMarketUpdateId)[0]
        superToUpdate.listProducts.push(newProduct)
        const supersToStorage = JSON.stringify([...supers.filter(superMarket => superMarket.id !== superMarketUpdateId), superToUpdate])
        await AsyncStorage.setItem(storageTokens.SUPERS_MARKET, supersToStorage)
    } catch (error) {
        throw error
    }
}