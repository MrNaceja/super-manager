import AsyncStorage from "@react-native-async-storage/async-storage"
import { ISuperMarket, storageTokens } from "../appDTO"

export default async function read(id? : string) : Promise<ISuperMarket[]> {
    try {
        const supersStoraged = await AsyncStorage.getItem(storageTokens.SUPERS_MARKET)
        const supersMarket = supersStoraged ? JSON.parse(supersStoraged) : []
        return supersMarket
    } catch (error) {
        throw error
    }
}