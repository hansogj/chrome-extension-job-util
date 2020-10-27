import React, { useEffect, useState } from 'react'
import { Hash } from '../../types'
import Switch from '../Elements/Switch'
import { Column, Row } from '../styled'
export const envConfig: Hash<string> = {
    localhost: 'http://localhost',
    test: 'http://www-t.storebrand.no',
    tests: 'https://www-t.storebrand.no',
}

export default ({
    onChange,
    port,
    init = envConfig.localhost,
    https = false,
}: {
    init?: string
    port: number
    onChange: (env: string) => void
    https?: boolean
}) => {
    const testUrl = https ? envConfig.tests : envConfig.test
    const [isOn, switchOn] = useState(init !== envConfig.localhost)
    useEffect(() =>
        onChange(isOn ? testUrl : [envConfig.localhost, port].join(':'))
    )

    return (
        <Row width="250px">
            <Column>
                <h3>Velg miljø</h3>
            </Column>
            <Column>
                <Switch
                    cases={['localhost', 'test']}
                    width="120px"
                    isSelected={isOn}
                    onSelected={() => switchOn(!isOn)}
                />
            </Column>
        </Row>
    )
}
