import read from "./read"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tokens } from "../tokens";
import SuperMarketDTO from "./SuperMarketDTO";

export default async function create(superMarket : SuperMarketDTO) {
    try {
        const supers = await read()
        const supersToStorage = JSON.stringify([...supers, superMarket])
        return await AsyncStorage.setItem(tokens.SUPERS_MARKET, supersToStorage)
    } catch (error) {
        throw error
    }
}