import { TextInputProps } from 'react-native'
import * as Styled from './styled'

export default function InputText({...textInputProps} : TextInputProps) {
    return (
        <Styled.InputContainer { ...textInputProps }/>
    )
}