import styled from "styled-components/native";
import { MaterialIcons  } from '@expo/vector-icons'
import { DefaultTheme } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const ButtonContainer = styled(TouchableOpacity)`
    height: 56px;
    width: 56px;
    align-items: center;
    justify-content: center;
`

export type TVariantsIcon = 'light' | 'dark' | 'sucess' | 'error'

interface PropsIcon {
    variant: TVariantsIcon
}

function getColorVariant(variant : TVariantsIcon, theme : DefaultTheme) {
    switch (variant) {
        case "light":
            return theme["gray-100"]
        case 'dark':
            return theme["gray-900"]
        case 'sucess':
            return theme["green-500"]
        case 'error':
            return theme["red-500"]
    }
}

export const Icon = styled(MaterialIcons).attrs<PropsIcon>(({ variant, theme }) =>({
    size: 24,
    color: getColorVariant(variant, theme)
}))``