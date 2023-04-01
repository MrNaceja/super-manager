import AsyncStorage from "@react-native-async-storage/async-storage";
import ListSuperDTO from "./listSuperDTO";
import { tokens } from "../tokens";

export default async function create(listSuper : ListSuperDTO) {
    try {
        const listSuperToStorage = JSON.stringify(listSuper)
        await AsyncStorage.setItem(tokens.LIST_SUPER+'', listSuperToStorage)

    } catch (error) {
        console.log(error)
    }
}