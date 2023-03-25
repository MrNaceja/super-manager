import { ThemeProvider } from 'styled-components/native';
import Home from './src/screens/Home';
import { DefaultTheme } from './src/themes/default';

export default function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Home />
    </ThemeProvider>
  );
}
