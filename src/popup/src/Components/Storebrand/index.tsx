import React, { FunctionComponent, useState } from 'react'
import { base, Block, Content, ContentBody } from '../../Components/styled'
import { PageComponent } from '../../types'
import { PageSwitch } from '../Elements/PageSwitch'
import Fmi from './fmi'
import SsulAux from './ssul-aux'
import SsulWeb from './ssul-web'
import Unitlink from './unitlink'

const title = 'Stbd'
const views: PageComponent[] = [SsulAux, SsulWeb, Fmi, Unitlink]

const Component: FunctionComponent<{}> = () => {
    const [currentView, setView] = useState(SsulAux)
    return (
        <>
            <Block padding={`${base} 0`}>
                <PageSwitch
                    currentView={currentView}
                    onViewSelected={setView}
                    views={views}
                />
            </Block>
            <Content>
                <Block padding={`${base} 0`}>
                    <ContentBody>
                        <currentView.Component />
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
