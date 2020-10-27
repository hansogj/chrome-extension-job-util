import { default as React, FunctionComponent, useState } from 'react'
import { PageSwitch } from '../../Components/Elements/PageSwitch'
import Pit from '../../Components/Pit'
import Stbd from '../../Components/Storebrand'
import { Container } from '../../Components/styled'

const App: FunctionComponent<{}> = () => {
    const [currentView, setView] = useState(Stbd)

    return (
        <Container>
            <PageSwitch
                currentView={currentView}
                onViewSelected={setView}
                views={[Stbd, Pit]}
            />

            <currentView.Component />
        </Container>
    )
}

export default App
