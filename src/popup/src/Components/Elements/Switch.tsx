import React from 'react'
import styled from 'styled-components'
import { base, colors } from '../styled'

const delay = '0.4s'
const knotSize = `${parseInt(base) * 2}px`
const offset = `${parseInt(base) / 3}px`
const switchSize = `${parseInt(knotSize) + parseInt(offset) * 2}px`

const SwitchElem = styled.label<{ width: string }>`
    position: relative;
    display: inline-block;
    width: ${(props) => props.width};
    height: ${switchSize};
`

const Input = styled.input<{ case: string; translation: string }>`
    display: none;

    &:focus + .slider {
        box-shadow: 0 0 1px ${colors.darkShade};
    }

    &:checked + .slider {
        background-color: ${colors.kindOfBlue};
        &:before {
            -webkit-transform: translateX(${knotSize});
            -ms-transform: translateX(${knotSize});
            transform: translateX(${(props) => props.translation});
        }
    }
    &:checked + .slider:after {
        content: '${(props) => props.case}';
    }
`

const Slider = styled.div<{ case: string }>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.dark};
    -webkit-transition: ${delay};
    transition: ${delay};
    border-radius: ${switchSize};

    &:before {
        position: absolute;
        content: '';
        height: ${knotSize};
        width: ${knotSize};
        left: ${offset};
        bottom: ${offset};
        background-color: white;
        -webkit-transition: ${delay};
        transition: ${delay};
        border-radius: 50%;
    }

    &:after {
        content: '${(props) => props.case}';
        color: white;
        display: block;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        font-size: 10px;
        font-family: Verdana, sans-serif;
    }
`

interface SwitchProps {
    width?: string
    cases: string[]
    isSelected: boolean
    onSelected: () => void
}
export default ({
    width = '200px',
    cases,
    isSelected,
    onSelected,
}: SwitchProps) => (
    <SwitchElem className="switch" width={width}>
        <Input
            case={cases[1]}
            translation={`${
                parseInt(width) - parseInt(knotSize) - 2 * parseInt(offset)
            }px`}
            type="checkbox"
            id="togBtn"
            checked={isSelected}
            onChange={onSelected}
        />
        <Slider className="slider round" case={cases[0]} />
    </SwitchElem>
)
