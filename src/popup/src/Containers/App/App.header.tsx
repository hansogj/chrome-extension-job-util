import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { contentKidStyle, Title } from '../../Components/styled'

const ContentHeader = styled.header`
    ${contentKidStyle};
    align-items: center;
`

const AppHeader = ({ children }: PropsWithChildren<{}>) => (
    <ContentHeader>
        <Title>{children}</Title>
    </ContentHeader>
)
export default AppHeader
