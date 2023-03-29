import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { ThemeProvider } from 'styled-components/native';
import { DefaultTheme } from './src/themes/default';
import Loading from './src/components/Loading';
import { StatusBar } from 'expo-status-bar';
import Supers from './src/screens/Supers';
import NewSuper from './src/screens/NewSuper'
import ListSuper from './src/screens/ListSuper';

export default function App() {
const [fontLoaded] = useFonts({Poppins_400Regular, Poppins_700Bold})

  return (
    <ThemeProvider theme={DefaultTheme}>
      <StatusBar style='light' translucent />
      {
        fontLoaded ? <ListSuper /> : <Loading />
      }
    </ThemeProvider>
  );
}
