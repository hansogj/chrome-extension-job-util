import React, { FunctionComponent } from 'react'
import { PageComponent } from '../../types'
import { base, Block, colors, Content, ContentBody } from '../styled'
import { CalculateHours } from './calculate-hours'
import { CalculateSum } from './calculate-sum'
const title = 'Pit'

const Component: FunctionComponent<{}> = () => {
    return (
        <>
            <Block>
                <h1 style={{ color: colors.bright }}>Hello {title}</h1>
            </Block>
            <Content>
                <Block padding={`${base} 0`}>
                    <ContentBody>
                        <CalculateSum />
                    </ContentBody>
                </Block>

                <Block padding={`${base} 0`}>
                    <ContentBody>
                        <CalculateHours />
                    </ContentBody>
                </Block>
            </Content>
        </>
    )
}
export default {
    title,
    Component,
} as PageComponent
