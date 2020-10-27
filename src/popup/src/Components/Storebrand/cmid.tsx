import React, { useEffect, useState } from 'react'
import { Hash } from '../../types'
import Switch from '../Elements/Switch'
import { Column, Row } from '../styled'
export const envConfig: Hash<string> = {
    localhost: 'http://localhost',
    test: 'http://www-t.storebrand.no',
}

export default ({
    onChange,
    init = '',
}: {
    init?: string
    onChange: (cmid: string) => void
}) => {
    const [isOn, switchOn] = useState(init !== '')
    useEffect(() => onChange(isOn ? 'cmid=701175836' : ''))

    return (
        <Row width="250px">
            <Column>
                <h3>Bruker</h3>
            </Column>
            <Column>
                <Switch
                    cases={['kunde', 'rådgiver']}
                    width="120px"
                    isSelected={isOn}
                    onSelected={() => switchOn(!isOn)}
                />
            </Column>
        </Row>
    )
}
