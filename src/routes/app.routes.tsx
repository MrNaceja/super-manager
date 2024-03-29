import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Supers from "../screens/Supers"
import NewSuper from "../screens/NewSuper"
import ListSuper from "../screens/ListSuper"
import { ISuperMarket } from "../storage/appDTO"
import { AppRoutes } from "./routes"

export type TScreenListSuperProps = {
    superMarket: ISuperMarket;
}

export default function AppRouter() {

    const { Navigator : Stack, Screen } = createNativeStackNavigator()

    return (
        <Stack initialRouteName={AppRoutes.HOME} screenOptions={{
            headerShown: false,
            animation: "slide_from_right"
        }}>
            <Screen 
                name={AppRoutes.HOME}
                component={Supers}
            />
            <Screen 
                name={AppRoutes.NEW_SUPER}
                component={NewSuper}
            />
            <Screen 
                name={AppRoutes.SUPER_LIST}
                component={ListSuper}
            />
        </Stack>
    )
}