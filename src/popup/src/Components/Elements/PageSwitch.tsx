import React, { FunctionComponent } from 'react'
import { colors, Column, Row } from '../../Components/styled'
import { PageComponent } from '../../types'
import { Button } from '../Elements/Button'

interface TabSwitchProps {
    currentView: PageComponent
    onViewSelected: (view: PageComponent) => void
    views: PageComponent[]
}
export const PageSwitch: FunctionComponent<TabSwitchProps> = ({
    currentView,
    onViewSelected,
    views,
}) => {
    return (
        <Row>
            {views.map((view: PageComponent) => (
                <Column key={`app-view-${view.title}`}>
                    <Button
                        color={colors.bright}
                        onClick={() => onViewSelected(view)}
                        active={view.title === currentView.title}
                    >
                        {(view.btn || view.title).toUpperCase()}
                    </Button>
                </Column>
            ))}
        </Row>
    )
}
