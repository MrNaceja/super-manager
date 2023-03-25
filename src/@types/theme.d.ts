import 'styled-components/native'
import { DefaultTheme } from '../themes/default';

declare module 'styled-components/native' {
    type Theme = typeof DefaultTheme
    export interface DefaultTheme extends Theme {}
}