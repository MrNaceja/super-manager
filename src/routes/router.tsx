import { NavigationContainer as RouteNavigation } from '@react-navigation/native';
import AppRouter from './app.routes';
export default function Router() {
    return (
        <RouteNavigation>
            <AppRouter />
        </RouteNavigation>
    )
}