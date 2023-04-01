import AsyncStorage from "@react-native-async-storage/async-storage"
import { tokens } from "../tokens"

export default async function read(id? : string) {
    try {
        const supersStoraged = await AsyncStorage.getItem(tokens.SUPERS_MARKET)
        const supersMarket = supersStoraged ? JSON.parse(supersStoraged) : []
        return supersMarket

    } catch (error) {
        throw error
    }
}