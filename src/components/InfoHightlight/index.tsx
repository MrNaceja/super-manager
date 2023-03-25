import * as Styled from './styled'

interface PropsInfoHighlight {
    title: string;
    description?: string;
}

export default function InfoHighlight({ title, description } : PropsInfoHighlight) {
    return (
        <Styled.Container>
            <Styled.TitleInfo>{title}</Styled.TitleInfo>
            <Styled.DescInfo>{description}</Styled.DescInfo>
        </Styled.Container>
    )
}