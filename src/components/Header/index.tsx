import * as Styled from './styled'

interface PropsHeader {
    showButtonBack?: boolean
}

export default function Header({ showButtonBack = true } : PropsHeader) {
    return (
        <Styled.Header>
            {
                showButtonBack &&
                <Styled.ButtonBack>
                    <Styled.IconBack />
                </Styled.ButtonBack>
            }
            <Styled.Logo />
        </Styled.Header>
    )
}