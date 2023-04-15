import AsyncStorage from "@react-native-async-storage/async-storage"
import { ISuperMarket, storageTokens } from '../appDTO';

export default async function read<T>(id? : string) : Promise<T> {
    try {
        const supersStoraged = await AsyncStorage.getItem(storageTokens.SUPERS_MARKET)
        let supersMarket : ISuperMarket[] = supersStoraged ? JSON.parse(supersStoraged) : []
        return (id ? supersMarket.filter(superMarket => superMarket.id == id).shift() as ISuperMarket : supersMarket) as T
    } catch (error) {
        throw error
    }
}