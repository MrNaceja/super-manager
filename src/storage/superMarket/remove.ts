import AsyncStorage from "@react-native-async-storage/async-storage"
import { ISuperMarket, storageTokens } from "../appDTO"
import read from "./read"

export default async function remove(superMarketId : string) {
    try {
        const supers = await read<ISuperMarket[]>()
        const supersToStorage = JSON.stringify([...supers.filter(superMarket => superMarket.id !== superMarketId)])
        await AsyncStorage.setItem(storageTokens.SUPERS_MARKET, supersToStorage)
    } catch (error) {
        throw error
    }
}