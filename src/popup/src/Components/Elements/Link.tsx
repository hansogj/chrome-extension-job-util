import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { colors } from '../styled'

export const LinkElem = styled.a`
    color: ${colors.white};
    &:visited {
        color: ${colors.white};
    }
    &:hover {
        color: ${colors.dread};
    }
`

interface LinkProps {
    goto: string
    onClick: () => void
}
export default ({ goto, onClick, children }: PropsWithChildren<LinkProps>) => (
    <LinkElem target="_blank" onClick={onClick} href={goto}>
        {children}
    </LinkElem>
)
