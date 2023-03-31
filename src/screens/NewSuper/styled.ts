import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const NewSuperContainer = styled(SafeAreaView)`
    flex: 1;
    background: ${props => props.theme["gray-900"]};
    gap:30px;
    padding: 0 15px 15px;
`