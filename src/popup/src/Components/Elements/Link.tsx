import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { copyStringToClipboard } from '../../utils'
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
    copy: any
}
export default ({ goto, copy, children }: PropsWithChildren<LinkProps>) => (
    <LinkElem
        target="_blank"
        onClick={() => copyStringToClipboard(copy)}
        href={goto}
    >
        {children}
    </LinkElem>
)
