import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MultiSelect, {MultiSelectProps} from 'react-native-multiple-select'

export const NewSuperContainer = styled(SafeAreaView)`
    flex: 1;
    background: ${props => props.theme["gray-200"]};
    gap:30px;
    padding: 0 15px 15px;
`

export const SelectSectorList = styled(MultiSelect).attrs(props => {
    return {
        styleDropdownMenuSubsection: {
            backgroundColor: props.theme["gray-200"],
            borderRadius:5,
            borderBottomColor: "transparent",
        },
        styleIndicator: {
            height: 30,
            marginVertical: 15
        },
        styleInputGroup: {
            backgroundColor: props.theme["gray-200"],
        },
        styleRowList: {
            backgroundColor: props.theme["gray-200"],
            elevation:3,
            padding:10
        },
        styleListContainer: {
            backgroundColor: props.theme["gray-200"], 
        },
        styleMainWrapper: { flex:1 },
        noItemsText: "Setor não encontrado",
        fixedHeight: true,
        styleSelectorContainer: {elevation:0},
        selectedItemTextColor: props.theme["green-500"],
        selectedItemIconColor: props.theme["green-500"],
        styleTextDropdown: {marginLeft: 10},
        textColor: props.theme["gray-600"],
        tagBorderColor: props.theme["green-500"],
        tagTextColor: props.theme["green-500"],
        tagRemoveIconColor: props.theme["red-500"],
        hideTags: false,
        selectedText: 'selecionado(s)',
        selectText: "Selecionar setores",
        searchInputPlaceholderText: "Buscar setores",
        hideSubmitButton: true,
        hideDropdown: true,
    } as MultiSelectProps
})``