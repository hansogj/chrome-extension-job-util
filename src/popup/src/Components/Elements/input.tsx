import styled from 'styled-components'

import { base, colors } from '../styled'

export const Input = styled.input<{ width?: number }>`
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: ${colors.bright};
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: ${colors.kindOfBlue};
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: ${colors.darkShade};
    border-image: initial;
    &: focus {
        border-color: ${colors.shade};
    }

    max-width: ${(props) =>
        props.width ? `calc(${base} * ${props.width})` : '100%'};
`

export const FormContainer = styled.div<{ label?: string }>`
    input {
        display: inline-block;
        margin-left: ${base};
    }
`
