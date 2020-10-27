import styled, { css } from 'styled-components'

export const base = '12px'

export const colors = {
    dark: '#282c34',
    darkShade: '#030405',
    black: '#111',
    bright: '#6793a7',
    white: '#ddd',
    shade: '#aaa',
    dread: '#880000',
    kindOfBlue: '#123654',
}

export const fontSizes = {
    small: base,
    medium: `calc(${base} + 2px)`,
    large: `calc(${base} + 3px)`,
}

export const contentKidStyle = css`
    display: flex;
    flex-direction: column;

    justify-content: center;
    font-size: ${fontSizes.medium};
    color: ${colors.white};
`

export const Container = styled.div`
    font-size: ${fontSizes.medium};
    background-color: ${colors.dark};
    padding: ${base};

    h1,
    h2,
    h3,
    h4 {
        margin: ${base} 0;
        padding: 0;
    }
    hr {
        width: 100%;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-end: 0;
        margin-inline-start: 0;
        border-style: outset;
        border-width: 4px;
        border-bottom: none;
        border-left: none;
        border-right: none;
        border-top: 3px solid;
        border-color: ${colors.kindOfBlue};
        margin: ${base} 0;
    }
`

export const Content = styled.div`
    border-radius: calc(${base} / 2);
    border: 1px solid ${colors.black};
    background-size: auto;
    background-color: ${colors.bright};
`

export const ContentBody = styled.div`
    margin-top: ${base};
    padding: 0 ${base};
    align-items: start;
    ${contentKidStyle};
`
export const Column = styled.div<{ nowrap?: boolean }>`
    flex-direction: column;
    margin: 0 2px;
    display: ${(props) => (props.nowrap ? 'inline' : 'flex')};
    white-space: ${(props) => (props.nowrap ? 'nowrap' : '')};
`

export const Row = styled.div<{ width?: string }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2px 0;
    width: ${(props) => props.width || '100%'};
`

export const Block = styled.div<{ padding?: string; color?: string }>`
    display: block;
    margin: 0;
    padding: ${(props) => props.padding || `0 ${base}`};
`

export const Title = styled.p`
    color: ${colors.kindOfBlue};
    font-weight: bold;
    padding: 0;
    margin: 0;
`
