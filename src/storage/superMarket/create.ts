import { IListSuperMarket, ISuperMarket, storageTokens } from "../appDTO";
import read from "./read"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function create(superMarket : ISuperMarket) {
    try {
        const supers = await read()
        const supersToStorage = JSON.stringify([...supers, superMarket])
        await AsyncStorage.setItem(storageTokens.SUPERS_MARKET, supersToStorage)
    } catch (error) {
        throw error
    }
}